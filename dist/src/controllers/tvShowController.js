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
exports.getTvShowEpisode = exports.getAllTvShow = exports.getTvShow = void 0;
const tvshow_1 = require("../models/tvshow");
const episode_1 = require("../models/episode");
const actor_1 = require("../models/actor");
const director_1 = require("../models/director");
// GET /tvshow/:id
const getTvShow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Try to find one TvShow
    try {
        const { id } = req.params;
        const tvShow = yield tvshow_1.TvShow.findByPk(id, {
            include: [{
                    model: episode_1.Episode,
                    attributes: ['name', 'date', 'seasonId']
                },
            ]
        });
        // Return the episode to the client.
        res.json(tvShow);
    }
    catch (error) {
        // Throw an error if something goes wrong.
        throw new Error('Error returning TvShow');
    }
});
exports.getTvShow = getTvShow;
//GET "/tvshows"
const getAllTvShow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Try to find all TvShows.
    try {
        const tvShows = yield tvshow_1.TvShow.findAll();
        // Return all episodes to the client.
        res.json(tvShows);
    }
    catch (error) {
        // Throw an error if something goes wrong.
        throw new Error('Error returning  all TvShows');
    }
});
exports.getAllTvShow = getAllTvShow;
// Get "/tvshows/:tvShowId/episodes/:episodeId"
const getTvShowEpisode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Try to find the episode with the specified ID.
    try {
        const { tvShowId, episodeId } = req.params;
        const episode = yield episode_1.Episode.findOne({
            where: {
                id: episodeId,
                tvShowId: tvShowId,
            },
            attributes: ['id', 'name', 'date', 'seasonId'],
            include: [{
                    model: director_1.Director,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    },
                },
                {
                    model: actor_1.Actor,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    },
                }
            ]
        });
        // Return the episode to the client.
        res.json(episode);
    }
    catch (error) {
        // Throw an error if something goes wrong.
        throw new Error('Error returning episode');
    }
});
exports.getTvShowEpisode = getTvShowEpisode;
//# sourceMappingURL=tvShowController.js.map