# Prueba-nubceo
Prueba Técnica Nubceo

## Getting Started
To get started with this application, follow the instructions below.

## Prerequisites
* Node.js (version 20.0.0)
* Mysql 

## Installation
 1. Clone the repository:
```
git clone https://github.com/javimane/prueba-nubceo.git
```
 3. Intall the dependencies:
```
npm install
```
 4. Set up the environment variables:
    
Create a env file in the root directory of the project.

Add the necessary environment variables in the .env file. For example:
```
PORT=3001           //the port where the server will listen
SECRET_KEY=         //your example secret key or token
```
5. In the file src/db/connection.ts you must to configure the database:
 ```
const db = new Sequelize('prueba_nubceo', 'your user', 'your password',
```
6. Download the file ```prueba_tecnica.sql ```and run it in your Mysql program.
   
Start the server:
```
 npm start
```
7. Access the aplication at http://localhost:3001/api-doc/ to see and try the endpoints, and see the models.

## Project Information
 * Name: prueba_nubceo
 * Version: 1.0.0
 * Description: Nubceo Challenge
 * Author: Tec.Elias Manesero

## Development Dependencies:
  * "bcrypt": "^5.1.1",
  * "cors": "^2.8.5",
  * "dotenv": "^16.3.1",
  * "express": "^4.18.2",
  * "jsonwebtoken": "^9.0.2",
  * "mysql2": "^3.6.1",
  * "sequelize": "^6.33.0",
  * "swagger-jsdoc": "^6.2.8",
  * "swagger-ui-express": "^5.0.0"
  * "tslint": "^6.1.3",
  * "typescript": "^5.2.2"
  * "nodemon": ^2.0.22
  * "tsc-watch": ^6.0.4

    
