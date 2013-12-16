#!/usr/bin/env python
"""
@author:    Matthias Feys (matthiasfeys@gmail.com), IBCN (Ghent University)
@date:      %(date)s
"""
import logging, pymongo

logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)
logger=logging.getLogger("Mongo_utils")


db = pymongo.MongoClient()
work=db.work
datastore=work.datastore

def cleanoutput(variable,key):
    if type(variable) is float:
        variable="%.2f"%variable
    return variable

def get_result_types():
    return datastore.distinct("name")

def get_all_compare_events():    
    entries=[]    
    headings=['name','splitname','min_sim','big','F1','cos_sim','precision','recall']
    for res in datastore.find({"name":"compare_events"}):
       elements={"splitname":res['parameters']["info"]['splitname'],"min_score":res['parameters']["info"]['min_score'],"min_sim":res['parameters']["info"]['min_sim'],"big":res['parameters']['big'],"name":res['parameters']['name'],"precision":res['result']['precision'],"recall":res['result']['recall'],"cos_sim":res['result']['cos_sim'],"F1":res['result']['F1']}
       entry=[cleanoutput(elements[key],key) for key in headings]
       entries.append(entry)
    return headings, entries
    
def get_all_compare_event(name):    
    entries=[]    
    headings=['event','big','F1','cos_sim','precision','recall']
    if name!='':
        for res in datastore.find({"name":"compare_event","parameters.name":name}):
           elements={"event":res['parameters']['g_count'],"splitname":res['parameters']["info"]['splitname'],"min_score":res['parameters']["info"]['min_score'],"min_sim":res['parameters']["info"]['min_sim'],"big":res['parameters']['big'],"name":res['parameters']['name'],"precision":res['result']['precision'],"recall":res['result']['recall'],"cos_sim":res['result']['cos_sim'],"F1":res['result']['F1']}
           entry=[cleanoutput(elements[key],key) for key in headings]
           entries.append(entry)
    else:
        for res in datastore.find({"name":"compare_event"}):
           elements={"event":res['parameters']['g_count'],"splitname":res['parameters']["info"]['splitname'],"min_score":res['parameters']["info"]['min_score'],"min_sim":res['parameters']["info"]['min_sim'],"big":res['parameters']['big'],"name":res['parameters']['name'],"precision":res['result']['precision'],"recall":res['result']['recall'],"cos_sim":res['result']['cos_sim'],"F1":res['result']['F1']}
           entry=[cleanoutput(elements[key],key) for key in headings]
           entries.append(entry)
    return headings, entries
if __name__ == '__main__':
    print get_all_compare_events()