from flask import Flask, request, render_template, session, redirect, url_for, Response, jsonify
import os


app = Flask(__name__)
app.secret_key = os.urandom(12)


@app.route('/landing_page')
def test():
    for i in range(0,100):
        print(i)
    return "done"

if __name__ == "__main__":
    app.run(debug=True)