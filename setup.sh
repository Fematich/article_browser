#!/bin/sh

virtualenv flask
. flask/bin/activate

pip install flask-mail
pip install sqlalchemy
pip install flask-sqlalchemy
pip install sqlalchemy-migrate 0.8.4-1
pip install flask-whooshalchemy
pip install flask-wtf
pip install flup
pip install pymongo
pip install cython
pip install numpy
pip install -U pyyaml nltk
pip install pandas
pip install redis
pip install bokeh
pip install flask-security
pip install whoosh
pip install requests
