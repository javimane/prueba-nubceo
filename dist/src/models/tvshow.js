"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShow = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.TvShow = connection_1.default.define("TvShow", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    channel: {
        type: sequelize_1.DataTypes.STRING,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    timestamps: false,
});
//# sourceMappingURL=tvshow.js.map