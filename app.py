from flask import Flask
from routes.index import index
from routes.Ppage import selfPage

app = Flask(__name__)

app.register_blueprint(index)
app.register_blueprint(selfPage)
# Тут будет инициадизация бд и подключение модулей
