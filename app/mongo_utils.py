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
    headings=['name','splitname','min_sim','big','F1','precision','recall','cos_sim','MAP',"#events",'non_match']
    for res in evaluation.compare_events.find({"parameters.info.dataset":"event_mall"}):
       elements={"splitname":res['parameters']["info"]['splitname'],"min_score":res['parameters']["info"]['min_score'],"min_sim":res['parameters']["info"]['min_sim'],"big":res['parameters']['big'],"name":res['parameters']['name'],"precision":res['result']['precision'],"recall":res['result']['recall'],"cos_sim":res['result']['cos_sim'],"F1":res['result']['F1'],"non_match":len(res['result']['non_match']),"MAP":res['result'].get("MAP",'?'),"#events":res['result']['n_events']}
       entry=[cleanoutput(elements[key],key) for key in headings]
       entries.append(entry)
    return headings, entries
    
def get_all_compare_event(name):    
    entries=[]    
    parent_elements={}
    headings=['event','g_size','F1','precision','recall','cos_sim','AP','big']
    if name!='':
        parent=evaluation.compare_events.find_one({"parameters.name":name,"parameters.info.dataset":"event_mall","parameters.big":True})
        parent_elements={"min_sim":parent['parameters']["info"]['min_sim'],"precision":parent['result']['precision'],"recall":parent['result']['recall'],"cos_sim":parent['result']['cos_sim'],"F1":parent['result']['F1'],"MAP":parent['result'].get("MAP",'?'),"# events":parent['result']['n_events']}
        for res in evaluation.compare_event.find({"parameters.name":name,"parameters.info.dataset":"event_mall"}):
            elements={"event":res['parameters']['g_id'],"splitname":res['parameters']["info"]['splitname'],"min_score":res['parameters']["info"]['min_score'],"min_sim":res['parameters']["info"]['min_sim'],"big":res['parameters']['big'],"name":res['parameters']['name'],"precision":res['result']['precision'],"recall":res['result']['recall'],"cos_sim":res['result']['cos_sim'],"F1":res['result']['F1'],"g_size":res['result']['n_g_docs'],"AP":res['result'].get("AP",'?')}    
            entry=[cleanoutput(elements[key],key) for key in headings]
            entries.append(entry)
    else:
        for res in evaluation.compare_event.find({"parameters.dataset":"event_mall"}):
           elements={"event":res['parameters']['g_id'],"splitname":res['parameters']["info"]['splitname'],"min_score":res['parameters']["info"]['min_score'],"min_sim":res['parameters']["info"]['min_sim'],"big":res['parameters']['big'],"name":res['parameters']['name'],"precision":res['result']['precision'],"recall":res['result']['recall'],"cos_sim":res['result']['cos_sim'],"F1":res['result']['F1'],"g_size":res['result']['n_g_docs'],"AP":res['result'].get("AP",'?')}
           entry=[cleanoutput(elements[key],key) for key in headings]
           entries.append(entry)
    return headings, entries, parent_elements

def get_F1s(name):    
    entries=[]    
    headings=['g_size','F1']
    if name!='':
        for res in evaluation.compare_event.find({"parameters.name":name,"parameters.info.dataset":"event_mall"}):
            elements={"event":res['parameters']['g_id'],"splitname":res['parameters']["info"]['splitname'],"min_score":res['parameters']["info"]['min_score'],"min_sim":res['parameters']["info"]['min_sim'],"big":res['parameters']['big'],"name":res['parameters']['name'],"precision":res['result']['precision'],"recall":res['result']['recall'],"cos_sim":res['result']['cos_sim'],"F1":res['result']['F1'],"g_size":res['result']['n_g_docs'],"AP":res['result'].get("AP",'?')}    
            entry=[elements[key] for key in headings]
            entries.append(entry)
    return entries

def get_data(rtype,name):
    entries=[]    

    #todo: make general selection name ... in parameters.name...
    for res in evaluation[rtype].find():
       elements=dict([(key,res['parameters'][key]) for key in res['parameters']]+[(key,res['result'][key]) for key in res['result']])
       entry=[cleanoutput(elements[key],key) for key in elements]           
       entries.append(entry)
    return [key for key in elements],entries
         
if __name__ == '__main__':
    print get_all_compare_events()