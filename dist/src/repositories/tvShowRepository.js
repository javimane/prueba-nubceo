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
const actor_1 = require("../models/actor");
const director_1 = require("../models/director");
const episode_1 = require("../models/episode");
const tvshow_1 = require("../models/tvshow");
class TvShowRepository {
    getTvShow(id) {
        return __awaiter(this, void 0, void 0, function* () {
            //Try to find one TvShow
            try {
                const tvShow = yield tvshow_1.TvShow.findByPk(id, {
                    include: [{
                            model: episode_1.Episode,
                            attributes: ['name', 'date', 'seasonId']
                        },
                    ]
                });
                // Return the episode to the client.
                return tvShow;
            }
            catch (error) {
                // Throw an error if something goes wrong.
                throw new Error('Error returning TvShow');
            }
        });
    }
    //GET "/tvshows"
    getAllTvShow() {
        return __awaiter(this, void 0, void 0, function* () {
            // Try to find all TvShows.
            try {
                const tvShows = yield tvshow_1.TvShow.findAll();
                // Return all episodes to the client.
                return tvShows;
            }
            catch (error) {
                // Throw an error if something goes wrong.
                throw new Error('Error returning  all TvShows');
            }
        });
    }
    // Get "/tvshows/:tvShowId/episodes/:episodeId"
    getTvShowEpisode(tvShowId, episodeId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Try to find the episode with the specified ID.
            try {
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
                return episode;
            }
            catch (error) {
                // Throw an error if something goes wrong.
                throw new Error('Error returning episode');
            }
        });
    }
}
exports.default = new TvShowRepository();
//# sourceMappingURL=tvShowRepository.js.map