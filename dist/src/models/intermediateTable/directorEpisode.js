"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorEpisode = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../db/connection"));
exports.DirectorEpisode = connection_1.default.define("DirectorEpisode", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    timestamps: false,
});
//# sourceMappingURL=directorEpisode.js.map