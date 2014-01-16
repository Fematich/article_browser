# -*- coding: utf8 -*-
"""
@author:    Matthias Feys (matthiasfeys@spurrit.com), Spurrit
@date:      %(date)
"""
import logging
from datetime import datetime
from flask import flash, redirect, render_template, g, url_for, abort
from flask_security.core import current_user
from flask.ext.security import login_required
from app import db
from . import annotate
import mongo_utils
from forms import SearchDateRangeForm
from app.utils import finddocs


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

@annotate.route('/<event>', methods = ['GET', 'POST'])
@login_required
def event(event):
    event=mongo_utils.get_event(name=event)
    form=SearchDateRangeForm()
    if form.validate_on_submit():
        results,numberdocs = finddocs(form.query.data)
        articles=[]
        for result in results:
            articles.append({'title':result['title'],'code':result['date'].strftime("%Y%m%d")+'+'+str(result['identifier'])})
            #doc=PoorDoc(docidentifier=result['identifier'],date=int(result['date'].strftime("%Y%m%d")))
            #articles.append({'title':result['title'],'content':doc.getfullcontent()})
        return render_template('event.html',
                               event=event,
                               form=form,
                               nresults=numberdocs,
                               articles = articles)
    return render_template('event.html',
                           event=event,
                           form=form,
                           nresults=numberdocs,
                           articles = [])