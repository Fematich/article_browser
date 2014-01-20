# -*- coding: utf8 -*-
"""
@author:    Matthias Feys (matthiasfeys@spurrit.com), Spurrit
@date:      %(date)
"""
import logging
#from wtforms.ext.sqlalchemy.orm import model_form
from wtforms import BooleanField, DateField, TextAreaField, TextField
from flask.ext.wtf import Form
from wtforms.validators import Required


class SearchDateRangeForm(Form):
    query = TextField('query', validators = [Required()])
    daterange = TextField('daterange')