#!flask/bin/python

import pymongo

from app import user_datastore, app, utils
from app import db
from config import plotdir,poordirectory, indexdir, MAX_SEARCH_RESULTS,PER_PAGE, SNIPPET_LENGTH

mongo_db = pymongo.MongoClient()
annotations=mongo_db.annotations

def create_roles():
    user_datastore.create_role(name='admin', description='The admin-role, provides full access to all databases and pages')
    db.session.commit()

def add_articles():
    for event in annotations.reference_events.find({'query':{'$exists':True},'articles':{'$exists':False}}):
        print event["name"]
        utils.add_reference_articles(event["name"])

if __name__ == '__main__': 
    #create_roles()
    user_datastore.add_role_to_user(user_datastore.get_user(2),'admin')
    db.session.commit()
    add_articles()
    
