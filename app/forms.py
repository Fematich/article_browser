from flask.ext.wtf import Form
from wtforms import TextField, RadioField
from wtforms.validators import Required

class SearchForm(Form):
    search = TextField('search', validators = [Required()])

class AnnotateForm(Form):
    annotation=RadioField(choices=['Core','Strongly Related','Weakly Related','Unrelated'])