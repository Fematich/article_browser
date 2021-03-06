import json
from flask import Flask, flash, redirect, render_template, g, abort, request, url_for
from flask_security.core import current_user
from flask.ext.security import login_required, roles_required
from app import app, db
import utils, mongo_utils
from utils import finddocs,PoorDoc
from forms import SearchForm
from models import Pagination

from config import MAX_SEARCH_RESULTS, PER_PAGE

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/article/<code>')
def article(code):
    [date,identifier]=code.split('+')
    document=utils.PoorDoc(docidentifier=int(identifier),date=int(date))
    return render_template('article.html',
        title = document.gettitle(),
        content = document.getfullcontent())

@app.before_request
def before_request():
    g.search_form = SearchForm()
    g.user = current_user
    if g.user.is_authenticated():
        db.session.add(g.user)
        db.session.commit()

@app.route('/search', methods=['GET', 'POST'])
def search():
    if request.method == 'POST':
        if not g.search_form.validate_on_submit():
            return redirect(url_for('index'))
        return redirect(url_for('search_results', query = g.search_form.search.data))
    else:
        return render_template('search.html',
                               text=False)
                               #PER_PAGE=PER_PAGE_STANDARD)

@app.route('/search_results/<query>', defaults={'page': 1})
@app.route('/search_results/<query>/<int:page>')
def search_results(query,page):
    results,numberdocs = finddocs(query,distribution=False,page=page)
    articles=[]
    pagination = Pagination(page, PER_PAGE, numberdocs)
    for result in results:
        articles.append({'title':result['title'],'code':result['date'].strftime("%Y%m%d")+'+'+str(result['identifier'])})
        #doc=PoorDoc(docidentifier=result['identifier'],date=int(result['date'].strftime("%Y%m%d")))
        #articles.append({'title':result['title'],'content':doc.getfullcontent()})
    if not articles and page != 1:
        abort(404)
    return render_template('search_results.html',
        pagination=pagination,
        query = query,
        nresults=numberdocs,
        results = articles)

def url_for_other_page(page):
    args = request.view_args.copy()
    args['page'] = page
    return url_for(request.endpoint, **args)
app.jinja_env.globals['url_for_other_page'] = url_for_other_page

@app.route('/settings', methods=['GET', 'POST'])
@login_required
def settings():
    settings=mongo_utils.get_usersettings(user=g.user.id)
#    if request.method == 'POST':
    edit=False
    for field in request.form:
        edit=True
        settings[field]=request.form[field]
    if edit:
        flash("Succesfully edited settings")
    mongo_utils.update_usersettings(g.user.id,settings)
    return render_template('settings.html',settings=settings)
        

@app.route('/results/<rtype>/<name>')
@app.route('/results/<rtype>')
@app.route('/results')
@roles_required('admin')
def results(rtype=None,name=''):
    if rtype==None:
        return render_template('results.html',types=mongo_utils.get_result_types())
    else:
        if rtype=='compare_events':
            headings, entries=mongo_utils.get_all_compare_events()
            return render_template('table.html',rtype=rtype,headings=headings,entries=entries)
        if rtype=='compare_event':
            headings, entries, parent_elements =mongo_utils.get_all_compare_event(name=name)
            return render_template('compare_event.html',rtype=rtype,name=name,headings=headings,entries=entries,parent_elements=parent_elements)
        if rtype=='compare_events_cos':
            headings, entries=mongo_utils.get_all_compare_events_cos()
            return render_template('table.html',rtype=rtype,headings=headings,entries=entries)
        if rtype=='compare_event_cos':
            headings, entries, parent_elements =mongo_utils.get_all_compare_event_cos(name=name)
            return render_template('compare_event.html',rtype=rtype,name=name,headings=headings,entries=entries,parent_elements=parent_elements)

        else:
            headings, entries=mongo_utils.get_data(rtype=rtype,name=name)
            return render_template('table2.html',rtype=rtype,name=name,headings=headings,entries=entries)

@app.route('/scatterplot/<name>')
def scatterplot(name):
    data=mongo_utils.get_F1s(name)
    return render_template('scatterplot.html',data=json.dumps(data))
    
@app.route('/scatterplot2/<param>')
def scatterplot2(param):
    datalist=[]
    for source in param.split('+'):
        datalist.append([source,mongo_utils.get_data(*source.split(':'))])
    plot_snippet = utils.build_plot(datalist)
    return render_template('plot.html', snippet=plot_snippet)

@app.route('/splitcompare/<param>')
def splitcompare(param):
    datalist=[]
    for source in param.split('+'):
        datalist.append([source,mongo_utils.get_F1ifv_minsim(source)])
    plot_snippet = utils.build_plot(datalist,logx=False)
    return render_template('plot.html', snippet=plot_snippet)

@app.route('/F1ifvbig/<param>')
def F1ifvbig(param):
    datalist=[]
    for source in param.split('+'):
        datalist.append([source,mongo_utils.get_F1ifvbig(source)])
    plot_snippet = utils.build_plot(datalist,logx=False)
    return render_template('plot.html', snippet=plot_snippet)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(e):
    return render_template('500.html'), 500