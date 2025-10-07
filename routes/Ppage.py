from flask import Blueprint, render_template

selfPage = Blueprint('selfPage', __name__)

@selfPage.route('/<userName>')
def Spage(userName):
    #return render_template(f'{username}.html')
    return f"{userName}"
