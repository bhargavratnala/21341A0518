import flask
from flask import request, jsonify
from flask_cors import CORS
import requests

app = flask.Flask(__name__)
CORS(app)

def get_access_token():
    url = "http://20.244.56.144/test/auth"

    payload = '''{
        "companyName" : "Affordmed",
        "clientID": "27554d51-6a76-455c-a3d9-99b3b04520a9",
        "clientSecret": "HQFISVwHBBCzknuT",
        "ownerName" : "Bhargav Ratnala",
        "rollNo" : "21341A0518",
        "ownerEmail" : "21341A0518@gmrit.edu.in"
    }'''

    headers = {
    'Content-Type': 'text/plain'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    return response.json()['access_token']

@app.route('/companies/<string:company>/categories/<string:category>/products', methods=['POST'])
def get_product(company, category):

    access_token = get_access_token()
    
    top = int(request.form['top'])
    minPrice = request.form['minPrice']
    maxPrice = request.form['maxPrice']
    page = int(request.form['page'])
    sort = request.form['sort']

    if page > 1:
        start = top * (page - 1)
        top = top * page

    url = f"http://20.244.56.144/test/companies/{ company }/categories/{ category }/products?top={ top }&minPrice={ minPrice }&maxPrice={ maxPrice }"

    print(url)

    headers = {
        "Authorization": f"Bearer { access_token }"
    }

    response = requests.get(url, headers=headers)

    data = response.json()

    print(len(data))

    if page > 1:
        data = data[start:]

    data.sort(key=lambda x: x[sort])

    return jsonify(data)

if __name__ == '__main__':
    app.run(port=5000, debug=True)