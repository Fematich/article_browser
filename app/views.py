from flask import Flask, flash, redirect, render_template, g, abort, request, url_for
from app import app
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
    results,numberdocs = finddocs(query, MAX_SEARCH_RESULTS)
    articles=[]
    pagination = Pagination(page, PER_PAGE, numberdocs)
    for result in results[(page-1)*PER_PAGE:page*PER_PAGE]:
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
def settings():
    return render_template('settings.html',)

@app.route('/results/<rtype>/<name>')
@app.route('/results/<rtype>')
@app.route('/results')
def results(rtype=None,name=''):
    if rtype==None:
        return render_template('results.html',types=mongo_utils.get_result_types())
    else:
        if rtype=='compare_events':
            headings, entries=mongo_utils.get_all_compare_events()
            return render_template('table.html',rtype=rtype,headings=headings,entries=entries)
        if rtype=='compare_event':
            headings, entries=mongo_utils.get_all_compare_event(name=name)
            return render_template('table2.html',rtype=rtype,name=name,headings=headings,entries=entries)
        else:
            headings, entries=mongo_utils.get_data(rtype=rtype,name=name)
            return render_template('table2.html',rtype=rtype,name=name,headings=headings,entries=entries)