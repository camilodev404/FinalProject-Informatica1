# PROYECTO FINAL INFORMATICA 1

<p style="text-align: justify;">
Se realiza el desarrollo del proyecto final de informatica 1 para plasmar el funcionamiento de la arquitectura basada en microservicios, junto con la creación de imagene de docker y su implementación para el despligue del proyecto. Basdo en una tienda de Vehiculos, que estiona la creación, actualización, y visalización de vehiculos y sus fabricantes.
</p>

## Microservicio para gestion de Vehiculos

<p style="text-align: justify;">
Se realiza un CRUD en python3 con el framework Flask, la estructura del microservicio consiste en un archivo de modelos, uno de variables de entorno, uno para la configuración de la base de datos, otro de requerimientos, otro para la creación de la imagen en docker y finalmente el punto de entrada del microservicio.
</p>

## Microservicio para gestión de Fabricantes

<p style="text-align: justify;">
Se realiza un CRUD en python3 con el framework Flask, la estructura del microservicio consiste en un archivo de modelos, uno de variables de entorno, uno para la configuración de la base de datos, otro de requerimientos, otro para la creación de la imagen en docker y finalmente el punto de entrada del microservicio.
</p>

## Base de Datos PostgreSQL

<p style="text-align: justify;">
Se crea un archivo .sql inicial para la creación de las tablas de la base de datos y de una data inicial para que sea cargada al momento de su creación.
</p>

## FrontApp

<p style="text-align: justify;">
El componen Visual del proyecto es construido utilizando la libreria de React, que ofrece bastnates prestacione sy facilidades para modularizas los componentes visuales de la interfaz de usuario, se estructura a partir de componentes para el CRUD de vehiculos y fabricantes como tambien un directorio de servicios, donde se realizan las conexiones de los metodos http correspondientes.
</p>

## Docker-Compose

<p style="text-align: justify;">
Se construye un archivo docker-compose para la declaración de los contenedores que se deben usar en el proyecto, los cuales son:

</p>

1. Base de Datos PostgreSQL
2. Microservicio Fabricantes
3. Microservicio Vehiculos
4. FrontApp

## Run Project

<p style="text-align: justify;">
Para la ejecución del proyecto se descarga el repositorio, y sobre este mismo se corre el comando docker-compose up -d el cual cosntruira las imagene y ejecutara los conetendores necesarios en las especificaciones del archivo, una vez se tenga el docker-compose en "up" se accede a la ruta:
localhost:3000/ 
</p>