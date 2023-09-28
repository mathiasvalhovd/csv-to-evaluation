from flask import Flask, request, jsonify
from flask_cors import CORS
from extract_data import DataExtractor

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_data():
    try:
        data = request.json.get('data', [])
        dataExtractor = DataExtractor(data)
        dataExtractor.extract()
        return jsonify({'message': 'Data received successfully'}), 200
    except Exception as e:
        print(e)
    

if __name__ == '__main__':
    app.run(host='localhost', port=5000)