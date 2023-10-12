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
const sequelize_1 = require("sequelize");
const director_1 = require("../models/director");
const movie_1 = require("../models/movie");
const actor_1 = require("../models/actor");
class MovieRepository {
    getAllMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listMovies = yield movie_1.Movie.findAll({
                    attributes: ['id', 'title', 'date', 'gender'],
                    include: [
                        {
                            model: director_1.Director,
                            attributes: ['name'],
                        },
                        {
                            model: actor_1.Actor,
                            attributes: ['name'],
                            through: {
                                attributes: [],
                            },
                        },
                    ],
                });
                return listMovies;
            }
            catch (error) {
                throw new Error('Error retrieving all Movies');
            }
        });
    }
    getMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movie = yield movie_1.Movie.findByPk(id, {
                    include: [
                        {
                            model: director_1.Director,
                            attributes: ['name'],
                        },
                        {
                            model: actor_1.Actor,
                            attributes: ['name'],
                            through: {
                                attributes: [],
                            },
                        },
                    ],
                });
                return movie;
            }
            catch (error) {
                throw new Error('Error retrieving Movie');
            }
        });
    }
    searchMoviesByTitle(title, order) {
        return __awaiter(this, void 0, void 0, function* () {
            // Create a where clause to filter the results by movie title.
            const whereClause = {
                title: { [sequelize_1.Op.like]: `%${title}%` },
            };
            // Determine the order in which to return the results.
            const orderItems = order === '1' ? [['title']] : order === '-1' ? [['title', 'DESC']] : [];
            // Try to find all movies that match the search criteria.
            try {
                const movies = yield movie_1.Movie.findAll({
                    where: whereClause,
                    attributes: ['id', 'title', 'date', 'gender'],
                    include: [
                        {
                            model: director_1.Director,
                            attributes: ['name'],
                        },
                        {
                            model: actor_1.Actor,
                            attributes: ['name'],
                            through: {
                                attributes: [],
                            },
                        },
                    ],
                    order: orderItems.map((item) => item),
                });
                // Return the matching movies.
                return movies;
            }
            catch (error) {
                // Throw an error if something goes wrong.
                throw new Error('Error searching movies');
            }
        });
    }
}
exports.default = new MovieRepository();
//# sourceMappingURL=movieRepository.js.map