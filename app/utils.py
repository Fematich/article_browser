"""
@author:    Matthias Feys (matthiasfeys@gmail.com), IBCN (Ghent University)
@date:      Wed Nov 20 13:06:07 2013
"""

import zipfile, pymongo
import pandas as pd
from datetime import datetime
from xml.dom.minidom import parseString
from whoosh import sorting
from whoosh.index import open_dir
from whoosh.qparser import QueryParser
from whoosh.query import DateRange
from whoosh.sorting import Facets

from bokeh.plotting import scatter, curplot, output_file, hold, line, xaxis, yaxis
import numpy as np

import os
import nltk
import logging
#from config import plotdir,poordirectory, indexdir, MAX_SEARCH_RESULTS,PER_PAGE, SNIPPET_LENGTH

################################################################
####################### search settings ########################
MAX_SEARCH_RESULTS = None
PER_PAGE = 20
################################################################
content=False
SNIPPET_LENGTH=2000
poordirectory="/home/mfeys/work/data/poor"
indexdir='/home/mfeys/work/dataprocessing/Reuters/index/index'
plotdir='/home/mfeys/work/article_browser/app/static/plots/'
################################################################

logger=logging.getLogger("utils")
db = pymongo.MongoClient()
annotations=db.annotations

class PoorDay():
    def __init__(self,docs=None,date=None,zipname=None,poordirectory=poordirectory):
        if docs!=None:
            self.docs=docs
        elif zipname!=None:
            self.docs = zipfile.ZipFile(os.path.join(poordirectory,zipname), "r")
        elif date!=None:
            self.docs = zipfile.ZipFile(os.path.join(poordirectory,"MED_%d.zip"%date), "r")
        else:
            logger.error("no initialization provided")
    
    def __iter__(self):
        for filename in self.docs.namelist():
            yield filename,self.docs.read(filename)

    def getdoc(self,docidentifier):
        return self.docs.read("med%d.xml"%docidentifier)
        
class PoorDoc():
    def __init__(self,docidentifier=None,date=None,docsdate=None,doc=None):
        if doc==None:
            if docsdate==None:
                docsdate = zipfile.ZipFile(os.path.join(poordirectory,"MED_%d.zip"%date), "r")
            doc=docsdate.read("med%d.xml"%docidentifier)
        self.dom=parseString(doc)
        
    def getcontent(self):
        content=self.dom.getElementsByTagName('body.content')
        return nltk.clean_html(content[0].toxml())
    
    def getsnippet(self):
        content=self.dom.getElementsByTagName('body.content')
        return nltk.clean_html(content[0].toxml())

    def getfullcontent(self):
        content=self.dom.getElementsByTagName('body.content')
        return content[0].toxml()

    def gettitle(self):
        title=self.dom.getElementsByTagName('headline')[0].getElementsByTagName('hl1')
        return nltk.clean_html(title[0].toxml()).replace('\n',' ').replace('\t',' ')
        
    def getpagenumber(self):
        return self.dom.getElementsByTagName('body.p').item(0).getAttribute("pageNumber")
    
    def getprovider(self):
        return self.dom.getElementsByTagName('id').item(0).getAttribute("title")
    
    def savedoc(self,zpfile,name):
        zpfile.writestr(name,self.dom.toprettyxml(),compress_type=0)


def finddocs(query, daterange=None, page=1,ndocs=PER_PAGE, MAX_SEARCH_RESULTS=MAX_SEARCH_RESULTS,distribution=True):
    ix = open_dir(indexdir)
    res=[]
    daycount={}
    with ix.searcher() as searcher:
        parser = QueryParser("content", ix.schema)
        myquery = parser.parse(query)
        if distribution:
            myfacet=Facets().add_field("date",maptype=sorting.UnorderedList)
            if daterange!=None:
                datequery=DateRange("date", daterange[0],daterange[1])
                results=searcher.search(datequery & myquery, groupedby=myfacet,limit=MAX_SEARCH_RESULTS)
            else:
                results=searcher.search(myquery, groupedby=myfacet,limit=MAX_SEARCH_RESULTS)
            doc_cnt=0
            for day,docs in results.groups().iteritems():
                daycount[day]=len(docs)
                for result in docs:
                    if doc_cnt in range((page-1)*ndocs,page*ndocs):
                        res.append({'title':searcher.stored_fields(result)['title'],'identifier':searcher.stored_fields(result)['identifier'],'date':searcher.stored_fields(result)['date']})
                    doc_cnt+=1
            total_docs=results.estimated_length()
            return res, total_docs, daycount
        else:
            if daterange!=None:
                datequery=DateRange("date", daterange[0],daterange[1])
                results=searcher.search(datequery & myquery, limit=MAX_SEARCH_RESULTS)
            else:
                results=searcher.search(myquery, limit=MAX_SEARCH_RESULTS)
            for result in results[(page-1)*ndocs:page*ndocs]:
                res.append({'title':result['title'],'identifier':result['identifier'],'date':result['date']})              
        total_docs=results.estimated_length()
        return res, total_docs

def getdocs(name, page=1,ndocs=PER_PAGE):
    res=[]
    results=annotations.reference_events.find_one({"name":name})['articles']
    for result in results[(page-1)*ndocs:page*ndocs]:
        doc=PoorDoc(docidentifier=result['identifier'],date=int(result['date'].strftime("%Y%m%d")))
        res.append({'title':doc.gettitle(),'identifier':result['identifier'],'date':result['date'],'snippet':doc.getcontent()})              
    total_docs=len(results)
    return res, total_docs

def findsnippets(query, daterange=None, page=1,ndocs=PER_PAGE, MAX_SEARCH_RESULTS=MAX_SEARCH_RESULTS,distribution=True):
    ix = open_dir(indexdir)
    res=[]
    daycount={}
    with ix.searcher() as searcher:
        parser = QueryParser("content", ix.schema)
        myquery = parser.parse(query)
        if daterange!=None:
            datequery=DateRange("date", daterange[0],daterange[1])
            results = searcher.search(datequery & myquery,limit=MAX_SEARCH_RESULTS)
        else:
            results = searcher.search(myquery,limit=MAX_SEARCH_RESULTS)
        if distribution:
            myfacet=Facets().add_field("date",maptype=sorting.Count)
            if daterange!=None:
                datequery=DateRange("date", daterange[0],daterange[1])
                daycount_orig=searcher.search(datequery & myquery, groupedby=myfacet,limit=MAX_SEARCH_RESULTS)
            else:
                daycount_orig=searcher.search(myquery, groupedby=myfacet,limit=MAX_SEARCH_RESULTS)     
            for day in daycount_orig.groups():
                daycount[day]=daycount_orig.groups()[day]
            for result in results[(page-1)*ndocs:page*ndocs]:
                doc=PoorDoc(docidentifier=result['identifier'],date=int(result['date'].strftime("%Y%m%d")))
                snippet=result.highlights("content", text=doc.getcontent())
                res.append({'title':result['title'],'identifier':result['identifier'],'date':result['date'],'snippet':snippet})
            total_docs=results.estimated_length()
            return res, total_docs, daycount
        else:
            for result in results[(page-1)*ndocs:page*ndocs]:
                doc=PoorDoc(docidentifier=result['identifier'],date=int(result['date'].strftime("%Y%m%d")))
                snippet=result.highlights("content", text=doc.getcontent())
                res.append({'title':result['title'],'identifier':result['identifier'],'date':result['date'],'snippet':snippet})
        total_docs=results.estimated_length()
        return res, total_docs
       

# Define a function that will return an HTML snippet.
def build_plot(datalist,logx=True):
    # Set the output for our plot.
    output_file('plot.html', title='Plot')#, js="relative", css="relative")
    # Create some data for our plot.
    colors=['red','green','blue','yellow','black']
#    colors=['tomato','navy']
    hold()
    cnt=0
    for name,data in datalist:
        cnt+=1
        x,y=zip(*data)
        if logx:
            scatter([np.log(x_el) for x_el in x] ,list(y) , color=colors[cnt], legend=name)
        else:
            scatter(list(x) ,list(y) , color=colors[cnt], legend=name)
    # Create an HTML snippet of our plot.
    snippet = curplot().create_html_snippet(embed_base_url='/static/plots/', embed_save_loc=plotdir)
    # Return the snippet we want to place in our page.
    return snippet

def build_timeplot(data):
    output_file('distribution.html', title='distribution')#, js="relative", css="relative")
    x,y=[],[]
    if len(data)>0:
        x,y=zip(*[(k, data[k]) for k in sorted(data)])
    line([pd.DatetimeIndex([dt])[0] for dt in x] , [int(yt) for yt in y],x_axis_type='datetime', tools="pan,zoom,resize", width=400,height=300, title = 'voorkomens')  
    xaxis()[0].axis_label = "Datum"
    yaxis()[0].axis_label = "# artikels"
    # Create an HTML snippet of our plot.
    snippet = curplot().create_html_snippet(embed_base_url='/static/plots/', embed_save_loc=plotdir)
    # Return the snippet we want to place in our page.
    return snippet
    
def add_reference_articles(name):
    event=annotations.reference_events.find_one({"name":name})
    daterange=event["daterange"]
    if daterange!=None:
        try:
            dates=daterange.split(' - ')
            daterange_dates=[datetime.strptime(date,"%d-%m-%Y") for date in dates]
        except Exception:
            daterange_dates=None      
    results, numberdocs=finddocs(event["query"], daterange=daterange_dates, ndocs=999999999999999, MAX_SEARCH_RESULTS=None,distribution=False)
    for article in results:
        annotations.reference_events.update({"name":name},
                                    {"$addToSet": {"articles": article}},
                                    upsert=True
                                    )
if __name__ == '__main__':
#    add_events()
    for event in annotations.reference_events.find({'query':{'$exists':True},'articles':{'$exists':False}}):
        print event["name"]
        add_reference_articles(event["name"])