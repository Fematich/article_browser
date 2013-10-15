from flask import Flask, flash, redirect, render_template, g, \
     request, url_for
from app import app
import utils
from utils import finddocs,PoorDoc
from forms import SearchForm

from config import MAX_SEARCH_RESULTS

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

@app.route('/search', methods = ['POST'])
def search():
    if not g.search_form.validate_on_submit():
        return redirect(url_for('index'))
    return redirect(url_for('search_results', query = g.search_form.search.data))

@app.route('/search_results/<query>')
def search_results(query):
    results,numberdocs = finddocs(query, MAX_SEARCH_RESULTS)
    articles=[]
    for result in results:
        articles.append({'title':result['title'],'code':result['date'].strftime("%Y%m%d")+'+'+str(result['identifier'])})
        #doc=PoorDoc(docidentifier=result['identifier'],date=int(result['date'].strftime("%Y%m%d")))
        #articles.append({'title':result['title'],'content':doc.getfullcontent()})
    return render_template('search_results.html',
        query = query,
        nresults=numberdocs,
        results = articles)
