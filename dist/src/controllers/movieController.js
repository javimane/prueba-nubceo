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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMoviesByTitle = exports.getMovie = exports.getAllMovies = void 0;
require("../models/intermediateTable/movieActor");
const movieRepository_1 = __importDefault(require("../repositories/movieRepository"));
//GET /api/movies
const getAllMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Try to find all movies.
    try {
        const listMovies = yield movieRepository_1.default.getAllMovies();
        // Return all movies.
        res.json(listMovies);
    }
    catch (error) {
        // Throw an error if something goes wrong.
        res.status(500).json({ message: error.message });
    }
});
exports.getAllMovies = getAllMovies;
//GET /api/movies/:id
const getMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Try to find the specific Movie by Id
    try {
        const { id } = req.params;
        const movie = yield movieRepository_1.default.getMovie(id);
        //Return the movie
        res.json(movie);
    }
    catch (error) {
        // Throw an error if something goes wrong.
        res.status(500).json({ message: error.message });
    }
});
exports.getMovie = getMovie;
//POST /api/movies/
const searchMoviesByTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.query.title;
    const order = req.query.order;
    try {
        const movies = yield movieRepository_1.default.searchMoviesByTitle(title, order);
        return res.json(movies);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.searchMoviesByTitle = searchMoviesByTitle;
//# sourceMappingURL=movieController.js.map