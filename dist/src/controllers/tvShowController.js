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
exports.getTvShowEpisode = exports.getAllTvShow = exports.getTvShow = void 0;
const tvShowRepository_1 = __importDefault(require("../repositories/tvShowRepository"));
// GET /tvshow/:id
const getTvShow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Try to find one TvShow
    try {
        const { id } = req.params;
        const tvShow = yield tvShowRepository_1.default.getTvShow(id);
        // Return the episode to the client.
        res.json(tvShow);
    }
    catch (error) {
        // Throw an error if something goes wrong.
        res.status(500).json({ message: error.message });
    }
});
exports.getTvShow = getTvShow;
//GET "/tvshows"
const getAllTvShow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Try to find all TvShows.
    try {
        const tvShows = yield tvShowRepository_1.default.getAllTvShow();
        // Return all episodes to the client.
        res.json(tvShows);
    }
    catch (error) {
        // Throw an error if something goes wrong.
        res.status(500).json({ message: error.message });
    }
});
exports.getAllTvShow = getAllTvShow;
// Get "/tvshows/:tvShowId/episodes/:episodeId"
const getTvShowEpisode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Try to find the episode with the specified ID.
    try {
        const { tvShowId, episodeId } = req.params;
        const episode = yield tvShowRepository_1.default.getTvShowEpisode(tvShowId, episodeId);
        // Return the episode to the client.
        res.json(episode);
    }
    catch (error) {
        // Throw an error if something goes wrong.
        res.status(500).json({ message: error.message });
    }
});
exports.getTvShowEpisode = getTvShowEpisode;
//# sourceMappingURL=tvShowController.js.map