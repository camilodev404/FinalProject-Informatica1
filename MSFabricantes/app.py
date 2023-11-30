from flask import Flask, request, jsonify, make_response
from os import environ
from database import db
from models.fabricante import Fabricante
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DB_URL')
db.init_app(app)

# recuperar fabricantes
@app.route('/fabricantes', methods=['GET'])
def get_fabricantes():
    try:
        fabricantes = Fabricante.query.all()
        return make_response(jsonify({'fabricantes': [fab.json() for fab in fabricantes]}), 200)
    except Exception as e:
        return make_response(jsonify({'message': 'error getting fabricantes'}), 500)

# recuperar fabricante
@app.route('/fabricante/<int:id_fab>', methods=['GET'])
def get_fabricante(id_fab):
    try:
        fabricante = Fabricante.query.filter_by(id_fab=id_fab).first()
        if fabricante:
            return make_response(jsonify({'fabricante': fabricante.json()}), 200)
        return make_response(jsonify({'message': 'fabricante not found'}), 404)
    except Exception as e:
        return make_response(jsonify({'message': 'error getting fabricante'}), 500)

# crear fabricante
@app.route('/fabricante', methods=['POST'])
def create_fabricante():
    try:
        data = request.get_json()
        new_fabricante = Fabricante(id_fab=data['id_fab'], nombre=data['nombre'], pais=data['pais'])
        db.session.add(new_fabricante)
        db.session.commit()
        return make_response(jsonify({'message': 'fabricante created'}), 201)
    except Exception as e:
        return make_response(jsonify({'message': 'error creating fabricante'}), 500)

# update fabricante
@app.route('/fabricante/<int:id_fab>', methods=['PUT'])
def update_fabricante(id_fab):
    try:
        fabricante = Fabricante.query.filter_by(id_fab=id_fab).first()
        if fabricante:
            data = request.get_json()
            fabricante.nombre = data['nombre']
            fabricante.pais = data['pais']
            db.session.commit()
            return make_response(jsonify({'message': 'fabricante updated'}), 200)
        return make_response(jsonify({'message': 'fabricante not found'}), 404)
    except Exception as e:
        return make_response(jsonify({'message': 'error updating fabricante'}), 500)

# delete fabricante
@app.route('/fabricante/<int:id_fab>', methods=['DELETE'])
def delete_fabricante(id_fab):
    try:
        fabricante = Fabricante.query.filter_by(id_fab=id_fab).first()
        if fabricante:
            db.session.delete(fabricante)
            db.session.commit()
            return make_response(jsonify({'message': 'fabricante deleted'}), 200)
        return make_response(jsonify({'message': 'fabricante not found'}), 200)
    except Exception as e:
        return make_response(jsonify({'message': 'error deleting fabricante'}), 500)