from flask import Blueprint
annotate_articles = Blueprint('annotate_articles', __name__,
                        template_folder='templates')

     
from views import *
