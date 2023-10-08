"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = require("../models/movie");
const { Op } = require("sequelize");
class MovieRepository {
    constructor() {
    }
    findAll({ title, gender, date }, { limit, offset, order }) {
        return __awaiter(this, void 0, void 0, function* () {
            let where = {};
            if (title) {
                where.title = {
                    [Op.like]: `%${title}%`
                };
            }
            if (gender) {
                where.gender = {
                    [Op.eq]: gender
                };
            }
            if (date) {
                where.date = {
                    [Op.eq]: date
                };
            }
            let config = {
                where,
                attributes: ['title', 'gender', 'date'],
            };
            if (order) {
                config.order = [order.split(';')];
            }
            return yield movie_1.Movie.findAll(config);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield movie_1.Movie.findByPk(id);
        });
    }
}
//# sourceMappingURL=movieRepository.js.map