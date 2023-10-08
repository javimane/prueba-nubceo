"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Movie = connection_1.default.define("Movie", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamps: false,
});
//# sourceMappingURL=movie.js.map