"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actor_1 = require("../actor");
const director_1 = require("../director");
const episode_1 = require("../episode");
const directorEpisode_1 = require("../intermediateTable/directorEpisode");
const episodeActor_1 = require("../intermediateTable/episodeActor");
const movieActor_1 = require("../intermediateTable/movieActor");
const tvShowActor_1 = require("../intermediateTable/tvShowActor");
const movie_1 = require("../movie");
const season_1 = require("../season");
const tvshow_1 = require("../tvshow");
// MANY TO MANY
tvshow_1.TvShow.belongsToMany(actor_1.Actor, { through: tvShowActor_1.TvShowActor });
actor_1.Actor.belongsToMany(tvshow_1.TvShow, { through: tvShowActor_1.TvShowActor });
movie_1.Movie.belongsToMany(actor_1.Actor, { through: movieActor_1.MovieActor });
actor_1.Actor.belongsToMany(movie_1.Movie, { through: movieActor_1.MovieActor });
director_1.Director.belongsToMany(episode_1.Episode, { through: directorEpisode_1.DirectorEpisode });
episode_1.Episode.belongsToMany(director_1.Director, { through: directorEpisode_1.DirectorEpisode });
episode_1.Episode.belongsToMany(actor_1.Actor, { through: episodeActor_1.EpisodeActor });
actor_1.Actor.belongsToMany(episode_1.Episode, { through: episodeActor_1.EpisodeActor });
//MANY TO ONE
movie_1.Movie.belongsTo(director_1.Director, {
    foreignKey: "directorId",
    targetKey: "id",
});
director_1.Director.hasMany(movie_1.Movie, {
    foreignKey: "directorId",
    sourceKey: "id",
});
tvshow_1.TvShow.hasMany(season_1.Season, {
    foreignKey: "tvShowId",
    sourceKey: "id",
});
season_1.Season.belongsTo(tvshow_1.TvShow, {
    foreignKey: "tvShowId",
    targetKey: "id",
});
tvshow_1.TvShow.hasMany(episode_1.Episode, {
    foreignKey: "tvShowId",
    sourceKey: "id",
});
episode_1.Episode.belongsTo(tvshow_1.TvShow, {
    foreignKey: "tvShowId",
    targetKey: "id",
});
season_1.Season.hasMany(episode_1.Episode, {
    foreignKey: "seasonId",
    sourceKey: "id",
});
episode_1.Episode.belongsTo(season_1.Season, {
    foreignKey: "seasonId",
    targetKey: "id",
});
//# sourceMappingURL=relations.js.map