import psycopg
import os

def PSQLConnect():
    conn = psycopg.connect(os.getenv('POSTDRESS_CONNECTION'))
    return conn

def PSQLCursor(conn):
    cur =  conn.cursor()
    return cur
