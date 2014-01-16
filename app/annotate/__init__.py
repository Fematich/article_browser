from flask import Blueprint
annotate = Blueprint('annotate', __name__,
                        template_folder='templates')

     
from views import *