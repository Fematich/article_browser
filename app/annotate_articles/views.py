# -*- coding: utf8 -*-
"""
@author:    Matthias Feys (matthiasfeys@gmail.com), IBCN (Ghent University)
@date:      ...
"""
import logging
from datetime import datetime
from flask import flash, redirect, render_template, g, url_for, abort, request
from flask_security.core import current_user
from flask.ext.security import login_required, roles_required
from app import db
from . import annotate_articles
import mongo_utils
from forms import SearchDateRangeForm
from app.utils import finddocs, build_timeplot, PoorDoc, findsnippets, getdocs
from app.models import Pagination
from config import PER_PAGE, content, SNIPPET_LENGTH
logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)
logger=logging.getLogger("TODO")

content=True

@annotate_articles.before_request
def before_request():
    g.user = current_user
    if g.user.is_authenticated():
        db.session.add(g.user)
        db.session.commit()

@annotate_articles.route('/')
@annotate_articles.route('/index')
@login_required
def index():
    events=mongo_utils.get_events(query={'query':{'$exists':True}})
    for event in events:
        event['annotated']=mongo_utils.get_user_event(event['name'],g.user.id)['# annotated articles']
    return render_template('annotate_index.html',events=events)


@annotate_articles.route('/<event>/<page>')
@annotate_articles.route('/<event>')
@login_required
def event(event,page=1):
    event=mongo_utils.get_event(name=event)
    query=event['query']
    daterange=event['daterange']
    page=int(page)
    daterange_dates=None
    numberdocs=0
    if daterange!=None:
        try:
            dates=daterange.split(' - ')
            daterange_dates=[datetime.strptime(date,"%d-%m-%Y") for date in dates]
        except Exception:
            daterange_dates=None           
    if content:
        results, numberdocs = getdocs(name=event["name"],page=page)
#        results, numberdocs = finddocs(query, daterange=daterange_dates, page=page, distribution=False)
    else:
        results, numberdocs = findsnippets(query, daterange=daterange_dates, page=page, distribution=False)
    pagination = Pagination(page, PER_PAGE, numberdocs)
    articles=[]
    annotated_articles=mongo_utils.get_user_articles(event['name'],g.user.id)
    relevance={}
    for article in annotated_articles:
        relevance[article["article_id"]]=article['relevance']
        
    
    if content:
        for result in results:
            code=result['date'].strftime("%Y%m%d")+'+'+str(result['identifier'])
            doc=PoorDoc(docidentifier=result['identifier'],date=int(result['date'].strftime("%Y%m%d")))
            snip=doc.getsnippet()[:SNIPPET_LENGTH]
            if len(snip)==SNIPPET_LENGTH:
                snip=snip+"<a href="+url_for('article', code=code)+" >"+' ... More'+"</a>"
            articles.append({'title':result['title'],'code':code,'date':result['date'],'relevance':relevance.get(code),'snippet':snip})
    else:
        for result in results:
            articles.append({'title':result['title'],'code':code,'date':result['date'],'relevance':relevance.get(code),'snippet':result['snippet']})        
    return render_template('annotate_event.html',
                           event=event,
                           user_event=mongo_utils.get_user_event(event['name'],g.user.id),
                           nresults=numberdocs,
                           articles = articles,
                           pagination=pagination,
                           page_gen=url_for('annotate_articles.event',
                                            event=event['name'])
                           )


@annotate_articles.route('submit/<event>', methods = ['POST'])
@login_required
def submit_event(event):
    cnt=0
    last_id=''
    for field in request.form:
        article={"article_id":field,"relevance":request.form[field]}
        last_id=field
        mongo_utils.add_user_article(name=event,user=g.user.id,article=article)
        cnt+=1
    flash("Succesfully submitted %d articles"%cnt)
#    return True
    return redirect(request.referrer+'#article'+last_id)

@annotate_articles.route('/results')
@roles_required('admin')
def results():
   headings, entries, total_annotations,user_totals,event_totals =mongo_utils.get_all_user_events()
   return render_template('summary_annotations.html',headings=headings,entries=entries,total_annotations=total_annotations,user_totals=user_totals,event_totals=event_totals)
