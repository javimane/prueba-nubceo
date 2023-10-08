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
const tvshow_1 = require("../models/tvshow");
class TVShowRepository {
    getAllTVShows() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tvShows = yield tvshow_1.TvShow.findAll();
                return tvShows;
            }
            catch (error) {
                console.log(error.message);
                throw new Error('Error retrieving TV shows');
            }
        });
    }
    getTVShowById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tvShow = yield tvshow_1.TvShow.findByPk(id);
                return tvShow;
            }
            catch (error) {
                throw new Error('Error retrieving TV show');
            }
        });
    }
    getEpisodebyId(tvShowId, episodeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tvShow = yield this.getTVShowById(tvShowId);
                const episode = tvShow.episodes.find(e => e.episodeId === episodeId);
                return episode;
            }
            catch (error) {
                throw new Error('Error retrieving Episodes');
            }
        });
    }
    getAllEpisodes(tvShowId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tvShow = yield this.getTVShowById(tvShowId);
                return tvShow.episodes;
            }
            catch (error) {
                throw new Error('Error retrieving Episodes');
            }
        });
    }
    createTVShow({ title, genre, seasons, plot, episodes, actors }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Create a new TV show object
                const newTvShow = new TVShow({
                    title, genre, seasons, plot, episodes, actors
                });
                const tvShow = yield TVShow.create(newTvShow);
                return tvShow;
            }
            catch (error) {
                throw new Error('Error creating TV show');
            }
        });
    }
}
exports.default = new TVShowRepository();
//# sourceMappingURL=tvShowRepository.js.map