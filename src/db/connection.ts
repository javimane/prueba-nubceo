import { Sequelize } from 'sequelize';

                   //configuration object
const db = new Sequelize('prueba_nubceo', 'root', 'Javimysql.', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false, //
});

export default db;
