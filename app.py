from flask import Flask
from routes import index, selfPage

def createAPP():
    app = Flask(__name__)

    # Тут будет инициадизация бд и подключение модулей

    return app 
