from sqlalchemy import *
from migrate import *


from migrate.changeset import schema
pre_meta = MetaData()
post_meta = MetaData()
user = Table('user', pre_meta,
    Column('id', INTEGER, primary_key=True, nullable=False),
    Column('email', VARCHAR(length=255)),
    Column('password', VARCHAR(length=255)),
    Column('active', BOOLEAN),
    Column('confirmed_at', DATETIME),
    Column('current_login_at', DATETIME),
    Column('current_login_ip', VARCHAR(length=50)),
    Column('last_login_at', DATETIME),
    Column('last_login_ip', VARCHAR(length=50)),
    Column('login_count', INTEGER),
)


def upgrade(migrate_engine):
    # Upgrade operations go here. Don't create your own engine; bind
    # migrate_engine to your metadata
    pre_meta.bind = migrate_engine
    post_meta.bind = migrate_engine
    pre_meta.tables['user'].columns['current_login_at'].drop()
    pre_meta.tables['user'].columns['current_login_ip'].drop()
    pre_meta.tables['user'].columns['last_login_at'].drop()
    pre_meta.tables['user'].columns['last_login_ip'].drop()
    pre_meta.tables['user'].columns['login_count'].drop()


def downgrade(migrate_engine):
    # Operations to reverse the above upgrade go here.
    pre_meta.bind = migrate_engine
    post_meta.bind = migrate_engine
    pre_meta.tables['user'].columns['current_login_at'].create()
    pre_meta.tables['user'].columns['current_login_ip'].create()
    pre_meta.tables['user'].columns['last_login_at'].create()
    pre_meta.tables['user'].columns['last_login_ip'].create()
    pre_meta.tables['user'].columns['login_count'].create()
