from flask import Flask, request, jsonify, make_response
from os import environ
from database import db
from models.vehiculo import Vehiculo, Fabricante
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DB_URL')
db.init_app(app)

# recuperar vehiculos
@app.route('/vehiculos', methods=['GET'])
def get_vehiculos():
    try:
        vehiculos = Vehiculo.query.all()
        return make_response(jsonify({'vehiculos': [vehi.json() for vehi in vehiculos]}), 200)
    except Exception as e:
        return make_response(jsonify({'message': 'error getting vehiculos'}), 500)

# recuperar vehiculo
@app.route('/vehiculo/<int:id>', methods=['GET'])
def get_vehiculo(id):
    try:
        vehiculo = Vehiculo.query.filter_by(id=id).first()
        if vehiculo:
            return make_response(jsonify({'vehiculo': vehiculo.json()}), 200)
        return make_response(jsonify({'message': 'vehiculo not found'}), 404)
    except Exception as e:
        return make_response(jsonify({'message': 'error getting vehiculo'}), 500)

# create vehiculo
@app.route('/vehiculo', methods=['POST'])
def create_vehiculo():
    try:
        data = request.get_json()
        new_vehiculo = Vehiculo(id=data['id'], color=data['color'], precio=data['precio'], id_fab=data['id_fab'], modelo=data['modelo'])
        db.session.add(new_vehiculo)
        db.session.commit()
        return make_response(jsonify({'message': 'vehiculo created'}), 201)
    except Exception as e:
        return make_response(jsonify({'message': 'error creating vehiculo ' + str(e) }), 500)

# update vehiculo
@app.route('/vehiculo/<int:id>', methods=['PUT'])
def update_vehiculo(id):
    try:
        vehiculo = Vehiculo.query.filter_by(id=id).first()
        if vehiculo:
            data = request.get_json()
            vehiculo.color = data['color']
            vehiculo.precio = data['precio']
            vehiculo.id_fab = data['id_fab']
            vehiculo.modelo = data['modelo']
            db.session.commit()
            return make_response(jsonify({'message': 'vehiculo updated'}), 200)
        return make_response(jsonify({'message': 'vehiculo not found'}), 404)
    except Exception as e:
        return make_response(jsonify({'message': 'error updating vehiculo'}), 500)

# delete vehiculo
@app.route('/vehiculo/<int:id>', methods=['DELETE'])
def delete_vehiculo(id):
    try:
        vehiculo = Vehiculo.query.filter_by(id=id).first()
        if vehiculo:
            db.session.delete(vehiculo)
            db.session.commit()
            return make_response(jsonify({'message': 'vehiculo deleted'}), 200)
        return make_response(jsonify({'message': 'vehiculo not found'}), 200)
    except Exception as e:
        return make_response(jsonify({'message': 'error deleting vehiculo'}), 500)
    
# recuperar fabricantes
@app.route('/vehiculo/fabricantes', methods=['GET'])
def get_fabricantes():
    try:
        fabricantes = Fabricante.query.all()
        return make_response(jsonify({'fabricantes': [fab.json() for fab in fabricantes]}), 200)
    except Exception as e:
        return make_response(jsonify({'message': 'error getting fabricantes'}), 500)