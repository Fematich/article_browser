# -*- coding: utf8 -*-
"""
@author:    Matthias Feys (matthiasfeys@gmail.com), IBCN, UGent
@date:      %date
"""

import os
basedir = os.path.abspath(os.path.dirname(__file__))
################################################################
######################## form settings #########################
CSRF_ENABLED = True
SECRET_KEY = 'you-will-never-guess'

################################################################
#################### SQLAlchemy settings #######################
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
SQLALCHEMY_MIGRATE_REPO = os.path.join(basedir, 'db_repository')

################################################################
######################## login settings ########################
SECURITY_REGISTERABLE = True
SECURITY_POST_REGISTER_VIEW = '/annotate'
SECURITY_SEND_REGISTER_EMAIL = False
SECUIRTY_POST_LOGIN = '/annotate'
SECURITY_RECOVERABLE = True
#SECURITY_TRACKABLE=True
SECURITY_CHANGEABLE = True
################################################################
####################### search settings ########################
MAX_SEARCH_RESULTS = None
PER_PAGE = 20
################################################################
######################## data settings #########################
from local_config import *
content=False
SNIPPET_LENGTH=3000
