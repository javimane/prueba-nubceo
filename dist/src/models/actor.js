"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Actor = connection_1.default.define("Actor", {
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
//Actor.sync()
//# sourceMappingURL=actor.js.map