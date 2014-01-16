from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask_mail import Mail

app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)
mail = Mail(app)


from models import User, Role
from flask.ext.security import Security, SQLAlchemyUserDatastore

# flask-security
user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore)
# jinja globals

from views import *
#import blueprints
from app import annotate
app.register_blueprint(annotate.annotate,url_prefix='/annotate')
