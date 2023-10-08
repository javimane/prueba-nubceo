import express, { Application } from 'express';

import userRoutes from '../routes/userRoutes';
import movieRoutes from '../routes/movieRoutes';
import tvShowRoutes from '../routes/tvShowRoutes';
import directorRoutes from '../routes/directorRoutes';

import cors from 'cors';

import db from '../db/connection';
import { swaggerSpec } from '../swagger/swagger';


require('../models/relations/relations');



class Server {

    private app: Application;
    private port: string;
    private swaggerUI = require('swagger-ui-express');
    private swaggerJsDoc = require('swagger-jsdoc');

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Database online');
          // db.sync({ force: true });
         


        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }

    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( express.static('public') );
    }


    routes() {
        this.app.use('/api-doc', this.swaggerUI.serve, this.swaggerUI.setup(this.swaggerJsDoc(swaggerSpec)))
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/movies', movieRoutes);
        this.app.use('/api/tvshows', tvShowRoutes );
        this.app.use('/api/directors', directorRoutes );
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }

}

export default Server;