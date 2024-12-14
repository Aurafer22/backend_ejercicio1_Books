# Gestor de Librerías y Libros

Este proyecto es una API RESTful para gestionar librerías y libros, diseñada para practicar conocimientos básicos de backend. Utiliza **Node.js**, **Express**, y **MongoDB Atlas** como base de datos.

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Instalación](#instalación)
3. [Uso](#uso)
4. [Rutas Disponibles](#rutas-disponibles)
5. [Tecnologías Usadas](#tecnologías-usadas)
6. [Contribución](#contribución)
7. [Licencia](#licencia)
8. [Créditos](#créditos)

## Descripción

Esta API permite gestionar dos colecciones relacionadas:

- **Librerías**: Información básica sobre librerías españolas.
- **Libros**: Detalles de libros asociados a las librerías donde se pueden encontrar esos libros.

### Funcionalidades

- CRUD para Librerías y Libros.
- Relación entre librerías y libros.
- Filtrado por librería o libro.

## Instalación

1. Clona este repositorio:
   git clone https://github.com/Aurafer22/backend_ejercicio1_Books.git

2.Ve al directorio del proyecto:
cd EJERCICIO_BBDD_1

3.Instala las dependencias:
npm install

4.Configura las variables de entorno:
• Crea un archivo .env con las siguientes claves:
mongodb+srv://aurafercomunicacion:6EVPSNQC9gGCirfW@cluster0.d1sm6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
• Inicia el servidor:
npm start
• Reestablece la semilla librerías:
npm seed2
• Reestablece la semilla libros:
npm seed

## Uso

Usa herramientas como Postman o Insomnia para realizar peticiones a la API.
Ejemplo de petición GET para obtener todos los libros:
GET http://localhost:3001/api/V1/books
Ejemplo de petición GET para obtener todoas las librerias:
GET http://localhost:3001/api/V1/bookShops

## Rutas Disponibles

Librerías:
• GET /api/V1/bookShops - Lista todas las librerías.
• POST /api/V1/bookShops - Crea una nueva librería.
• GET /api/V1/bookShops/:id - Obtiene una librería por su ID.
• PUT /api/V1/bookShops/:id - Actualiza una librería.
• DELETE /api/V1/bookShops/:id - Elimina una librería.
Libros:
• GET /api/V1/books - Lista todos los libros.
• POST /api/V1/books - Crea un nuevo libro.
• GET /api/V1/books/:id - Obtiene un libro por su ID.
• PUT /api/V1/books/:id - Actualiza un libro.
• DELETE /api/V1/books/:id - Elimina un libro.

## Relación

• GET /api/V1/bookShops y GET /api/V1/bookShops/:id - Muestra en cada librería el listado de libros relacionados.
• GET /api/V1/books y GET /api/V1/books/:id - Muestra en cada libro el listado de librerías relacionadas.

## Tecnologías Usadas

• Node.js
• Express
• MongoDB Atlas
• Mongoose

## Contribución

¿Quieres contribuir? ¡Bienvenid@!

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   git checkout -b feature/nueva-funcion
3. Sube tus cambios:
   git commit -m "Añadida nueva funcionalidad"
   git push origin feature/nueva-funcion
4. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT.

## Créditos

Creado por Aurora Ramírez Fernández.

---
