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


def get_result_types():
    return datastore.distinct("name")