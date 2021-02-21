from flask import (Flask, render_template, jsonify)
from flask_cors import CORS
import os
import time


app = Flask(__name__)
CORS(app)

@app.route("/")
def index_route():
    return "hello world"

@app.route("/time")
def api_get_time():
    return {"time": time.time()}


if __name__ == "__main__":
    app.run()
