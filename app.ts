import dotenv from 'dotenv';
import Server from './src/config/server';

// Configurar dot.env
dotenv.config();

const server = new Server();


server.listen();