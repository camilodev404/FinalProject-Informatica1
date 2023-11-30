CREATE TABLE fabricante
(
    id_fab INT,
    nombre VARCHAR(50),
    pais VARCHAR(50),
    PRIMARY KEY(id_fab)
);

CREATE TABLE vehiculo
(
    id INT,
    color VARCHAR(50),
    precio INT,
    id_fab INT,
    modelo VARCHAR(50),
    PRIMARY KEY(id),
    FOREIGN KEY(id_fab) REFERENCES fabricante(id_fab)
);

INSERT INTO fabricante VALUES 
    (1, 'BMW', 'Alemania'),
    (2, 'Toyota', 'Japon'),
    (3, 'Chevrolet', 'EEUU');

INSERT INTO vehiculo VALUES 
    (1, 'Rojo', 50000, 1, 'X6M'),
    (2, 'Negro', 60000, 2, 'TXL'),
    (3, 'Blanco', 10000, 3, 'Spark');