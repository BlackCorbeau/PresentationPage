from flask import Flask
from routes import index, selfPage

def createAPP():
    app = Flask(__name__)

    app.register_blueprint(index)
    app.register_blueprint(selfPage)
    # Тут будет инициадизация бд и подключение модулей

    return app 
