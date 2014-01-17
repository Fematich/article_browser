'''
Created on Oct 14, 2013

@author: mfeys
'''

import zipfile
from xml.dom.minidom import parseString
from whoosh import sorting
from whoosh.index import open_dir
from whoosh.qparser import QueryParser
from whoosh.query import DateRange
from whoosh.sorting import Facets

from bokeh.plotting import scatter, curplot, output_file, hold, line
import numpy as np

import os
import nltk
import logging

logger=logging.getLogger("utils")


from config import MAX_SEARCH_RESULTS,PER_PAGE
poordirectory="/home/mfeys/work/data/poor"
indexdir='/home/mfeys/work/data/mediargus_2011_be/index'

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


def finddocs(query, daterange=None, page=0,ndocs=PER_PAGE, MAX_SEARCH_RESULTS=MAX_SEARCH_RESULTS,distribution=True):
    ix = open_dir(indexdir)
    res=[]
    daycount={}
    with ix.searcher() as searcher:
        parser = QueryParser("content", ix.schema)
        myquery = parser.parse(query)
        if daterange!=None:
            datequery=DateRange("date", daterange[0],daterange[1])
            myquery=myquery & datequery
        if distribution:
            myfacet=Facets().add_field("date",maptype=sorting.UnorderedList)
            results=searcher.search(myquery,groupedby=myfacet,limit=MAX_SEARCH_RESULTS)
            doc_cnt=0
            for day,docs in results.groups().iteritems():
                daycount[day]=len(docs)
                for result in docs:
                    if doc_cnt in range((page-1)*ndocs,page*ndocs):
                        res.append({'title':searcher.stored_fields(doc_cnt)['title'],'identifier':searcher.stored_fields(doc_cnt)['identifier'],'date':searcher.stored_fields(doc_cnt)['date']})
                    doc_cnt+=1
            total_docs=results.estimated_length()
            return res, total_docs, daycount
        else:
            results = searcher.search(myquery,limit=MAX_SEARCH_RESULTS)
            for result in results[(page-1)*ndocs:page*ndocs]:
                res.append({'title':result['title'],'identifier':result['identifier'],'date':result['date']})              
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
        print cnt
        x,y=zip(*data)
        if logx:
            scatter([np.log(x_el) for x_el in x] ,list(y) , color=colors[cnt], legend=name)
        else:
            scatter(list(x) ,list(y) , color=colors[cnt], legend=name)
    # Create an HTML snippet of our plot.
    snippet = curplot().create_html_snippet(embed_base_url='/static/plots/', embed_save_loc='/home/mfeys/work/article_browser/app/static/plots/')
    # Return the snippet we want to place in our page.
    return snippet

def build_timeplot(data):
    output_file('plot.html', title='distribution')#, js="relative", css="relative")
    x,y=zip(*[[key,data[key]] for key in data])
    line([np.datetime64(dd).astype(long)/1000 for dd in x] , list(y))  
    # Create an HTML snippet of our plot.
    snippet = curplot().create_html_snippet(embed_base_url='/static/plots/', embed_save_loc='/home/mfeys/work/article_browser/app/static/plots/')
    # Return the snippet we want to place in our page.
    print snippet    
    return snippet