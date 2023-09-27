from flask import Flask

app = Flask(__name__)

@app.route("/added-file")
def added_file():
    return "hei"

if __name__ == "__main__":
    app.run(debug=True)
    