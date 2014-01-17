# -*- coding: utf8 -*-
"""
@author:    Matthias Feys (matthiasfeys@spurrit.com), Spurrit
@date:      %(date)
"""
import logging
from datetime import datetime
from flask import flash, redirect, render_template, g, url_for, abort, request
from flask_security.core import current_user
from flask.ext.security import login_required
from flask.ext.wtf import Form
from wtforms import RadioField
from app import db
from . import annotate
import mongo_utils
from forms import SearchDateRangeForm
from app.utils import finddocs, build_timeplot
from app.models import Pagination
from config import MAX_SEARCH_RESULTS, PER_PAGE
from whoosh.index import open_dir
from whoosh.qparser import QueryParser
from whoosh.query import CompoundQuery, DateRange
poordirectory="/home/mfeys/work/data/poor"
indexdir='/home/mfeys/work/dataprocessing/Reuters/index/index'

logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)
logger=logging.getLogger("TODO")

@annotate.before_request
def before_request():
#    login_user(_datastore.find_user(email='matthiasfeys@gmail.com'))
    g.user = current_user
    if g.user.is_authenticated():
        db.session.add(g.user)
        db.session.commit()


@annotate.route('/')
@annotate.route('/index')
@login_required
def index():
    events=mongo_utils.get_events()
    return render_template('eventindex.html',events=events)

@annotate.route('/<event>/<query>+<daterange>/<page>', methods = ['GET', 'POST'])
@annotate.route('/<event>/<query>+<daterange>', methods = ['GET', 'POST'])
@annotate.route('/<event>/<query>/<page>', methods = ['GET', 'POST'])
@annotate.route('/<event>/<query>', methods = ['GET', 'POST'])
@annotate.route('/<event>', methods = ['GET', 'POST'])
@login_required
def event(event,query='',daterange=None,page=1):
    page=int(page)
    daterange_dates=None
    event=mongo_utils.get_event(name=event)
    numberdocs=0
    form=SearchDateRangeForm()
    if form.validate_on_submit():
        query=form.query.data
        page=1
        daterange_dates=None
        if form.daterange.data!='':
            daterange=form.daterange.data
        return redirect(url_for('annotate.event',
                                    query=query,
                                    daterange=daterange,
                                    event=event['name']))
    if query!='':
        form.query.data=query
        if daterange!=None:
            try:
                form.daterange.data=daterange
                dates=form.daterange.data.split(' - ')
                daterange_dates=[datetime.strptime(date,"%d-%m-%Y") for date in dates]
            except Exception:
                form.daterange.data='01-01-2011 - 31-12-2011'
                daterange_dates=None
        results, numberdocs, daycount = finddocs(query, daterange=daterange_dates, page=page)
        snippet=build_timeplot(daycount)
        pagination = Pagination(page, PER_PAGE, numberdocs)
        articles=[]
        annotated_articles=mongo_utils.get_user_articles(event['name'],g.user.id)
        relevance={}
        for article in annotated_articles:
            relevance[article["article_id"]]=article['relevance']
        for result in results:
            code=result['date'].strftime("%Y%m%d")+'+'+str(result['identifier'])
            articles.append({'title':result['title'],'code':code,'date':result['date'],'relevance':relevance.get(code)})
            #doc=PoorDoc(docidentifier=result['identifier'],date=int(result['date'].strftime("%Y%m%d")))
            #articles.append({'title':result['title'],'content':doc.getfullcontent()})
        return render_template('event.html',
                               event=event,
                               form=form,
                               nresults=numberdocs,
                               articles = articles,
                               pagination=pagination,
                               snippet=snippet,
                               page_gen=url_for('annotate.event',
                                                query=query,
                                                daterange=daterange,
                                                event=event['name'])
                               )
    pagination = Pagination(page, PER_PAGE, 0)
    return render_template('event.html',
                           event=event,
                           form=form,
                           nresults=0,
                           articles = [],
                           pagination=pagination,
                           snippet='')

@annotate.route('submit/<event>', methods = ['POST'])
@login_required
def submit_event(event):
    articles=[]
    cnt=0
    for field in request.form:
        article={"article_id":field,"relevance":request.form[field]}
        mongo_utils.add_user_article(name=event,user=g.user.id,article=article)
        cnt+=1
    flash("Succesfully submitted %d articles"%cnt)
        
    return redirect(request.referrer)