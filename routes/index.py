from flask import Blueprint, render_template

index = Blueprint('index', __name__)

@index.route('/')
def mainPage():
    #return render_template("index.html")
    return 'Hello World'    
