from database import db
from sqlalchemy.orm import relationship

class Fabricante(db.Model):
    __tablename__ = 'fabricante'
    
    id_fab = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    pais = db.Column(db.String(50), nullable=False)
    
    vehiculos = relationship('Vehiculo', backref='fabricante')
    
    def json(self):
        return {'id_fab': self.id_fab, 'nombre': self.nombre, 'pais': self.pais}

class Vehiculo(db.Model):
    __tablename__ = 'vehiculo'
    
    id = db.Column(db.Integer, primary_key=True)
    color = db.Column(db.String(50), nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    id_fab = db.Column(db.Integer, db.ForeignKey('fabricante.id_fab'), nullable=False)
    modelo = db.Column(db.String(50), nullable=False)
    
    def json(self):
        return {'id': self.id, 'color': self.color, 'precio': self.precio, 'id_fab': self.id_fab, 'modelo': self.modelo}