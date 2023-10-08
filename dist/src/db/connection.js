"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//configuration object
const db = new sequelize_1.Sequelize('prueba_nubceo', 'root', 'Javimysql.', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false, //
});
exports.default = db;
//# sourceMappingURL=connection.js.map