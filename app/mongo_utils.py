#!/usr/bin/env python
"""
@author:    Matthias Feys (matthiasfeys@gmail.com), IBCN (Ghent University)
@date:      %(date)s
"""
import logging, pymongo

logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)
logger=logging.getLogger("Mongo_utils")


db = pymongo.MongoClient()
evaluation=db.evaluation

def cleanoutput(variable,key):
    if type(variable) is float:
        if key=="F1":
            variable="%.3f"%variable
        else:
            variable="%.2f"%variable
    return variable

def get_result_types():
    return evaluation.collection_names(include_system_collections=False)

def get_all_compare_events():    
    entries=[]    
    headings=['name','splitname','min_sim','big','F1','cos_sim','precision','recall','MAP','non_match']
    for res in evaluation.compare_events.find({"name":"compare_events","parameters.info.dataset":"event_mall"}):
       elements={"splitname":res['parameters']["info"]['splitname'],"min_score":res['parameters']["info"]['min_score'],"min_sim":res['parameters']["info"]['min_sim'],"big":res['parameters']['big'],"name":res['parameters']['name'],"precision":res['result']['precision'],"recall":res['result']['recall'],"cos_sim":res['result']['cos_sim'],"F1":res['result']['F1'],"non_match":len(res['result']['non_match']),"MAP":res['result'].get("MAP",'?')}
       entry=[cleanoutput(elements[key],key) for key in headings]
       entries.append(entry)
    return headings, entries
    
def get_all_compare_event(name):    
    entries=[]    
    headings=['event','big','F1','cos_sim','precision','recall']
    if name!='':
        for res in evaluation.compare_event.find({"name":"compare_event","parameters.name":name,"parameters.info.dataset":"event_mall"}):
           elements={"event":res['parameters']['g_count'],"splitname":res['parameters']["info"]['splitname'],"min_score":res['parameters']["info"]['min_score'],"min_sim":res['parameters']["info"]['min_sim'],"big":res['parameters']['big'],"name":res['parameters']['name'],"precision":res['result']['precision'],"recall":res['result']['recall'],"cos_sim":res['result']['cos_sim'],"F1":res['result']['F1']}
           entry=[cleanoutput(elements[key],key) for key in headings]
           entries.append(entry)
    else:
        for res in evaluation.compare_event.find({"name":"compare_event","parameters.dataset":"event_mall"}):
           elements={"event":res['parameters']['g_count'],"splitname":res['parameters']["info"]['splitname'],"min_score":res['parameters']["info"]['min_score'],"min_sim":res['parameters']["info"]['min_sim'],"big":res['parameters']['big'],"name":res['parameters']['name'],"precision":res['result']['precision'],"recall":res['result']['recall'],"cos_sim":res['result']['cos_sim'],"F1":res['result']['F1']}
           entry=[cleanoutput(elements[key],key) for key in headings]
           entries.append(entry)
    return headings, entries

def get_data(rtype,name):
    entries=[]    

    #todo: make general selection name ... in parameters.name...
    for res in evaluation[rtype].find({"name":rtype}):
       elements=dict([(key,res['parameters'][key]) for key in res['parameters']]+[(key,res['result'][key]) for key in res['result']])
       entry=[cleanoutput(elements[key],key) for key in elements]           
       entries.append(entry)
    return [key for key in elements],entries
         
if __name__ == '__main__':
    print get_all_compare_events()