from database import db

class Fabricante(db.Model):
    __tablename__ = 'fabricante'
    
    id_fab = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    pais = db.Column(db.String(50), nullable=False)
    
    def json(self):
        return {'id_fab': self.id_fab, 'nombre': self.nombre, 'pais': self.pais}