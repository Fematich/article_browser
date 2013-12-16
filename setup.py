#!/usr/bin/python
import os, subprocess, sys
#subprocess.call(['python', 'virtualenv.py', 'flask'])
bin = 'bin'
subprocess.call([os.path.join('flask', bin, 'pip'), 'install', 'flask-mail'])
subprocess.call([os.path.join('flask', bin, 'pip'), 'install', 'sqlalchemy==0.7.9'])
subprocess.call([os.path.join('flask', bin, 'pip'), 'install', 'flask-sqlalchemy'])
subprocess.call([os.path.join('flask', bin, 'pip'), 'install', 'sqlalchemy-migrate'])
subprocess.call([os.path.join('flask', bin, 'pip'), 'install', 'flask-whooshalchemy'])
subprocess.call([os.path.join('flask', bin, 'pip'), 'install', 'flask-wtf'])
subprocess.call([os.path.join('flask', bin, 'pip'), 'install', 'flask-babel'])
subprocess.call([os.path.join('flask', bin, 'pip'), 'install', 'flup'])
subprocess.call([os.path.join('flask', bin, 'pip'), 'install', 'pymongo'])
