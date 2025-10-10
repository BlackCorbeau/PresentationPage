import os
from dotenv import load_dotenv

def initializeENV():
    dotenv_path = '../.env'
    if os.path.exists(dotenv_path):
        load_dotenv(dotenv_path)
        print('.env is loaded')
        return 1
    else:
        print('.env isn`t loaded')
        return 0
