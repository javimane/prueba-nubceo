"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Director = connection_1.default.define("Director", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: sequelize_1.DataTypes.TINYINT,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamps: false,
});
/*Director.hasMany(Movie,{
    foreignKey:'directorId',
    sourceKey: 'id',
})
Movie.belongsTo(Director, {
    foreignKey: "directorId",
    targetKey: "id",
  });*/
//# sourceMappingURL=director.js.map