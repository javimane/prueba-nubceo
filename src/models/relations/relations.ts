import { Actor } from "../actor"
import { Director } from "../director"
import { Episode } from "../episode"
import { DirectorEpisode } from "../intermediateTable/directorEpisode"
import { EpisodeActor } from "../intermediateTable/episodeActor"
import { MovieActor } from "../intermediateTable/movieActor"
import { TvShowActor } from "../intermediateTable/tvShowActor"
import { Movie } from "../movie"
import { Season } from "../season"
import { TvShow } from "../tvshow"

// MANY TO MANY
TvShow.belongsToMany(Actor, { through: TvShowActor });
Actor.belongsToMany(TvShow, { through: TvShowActor });

Movie.belongsToMany(Actor, { through: MovieActor });
Actor.belongsToMany(Movie, { through: MovieActor });

Director.belongsToMany(Episode, { through: DirectorEpisode });
Episode.belongsToMany(Director, { through: DirectorEpisode });

Episode.belongsToMany(Actor, { through: EpisodeActor });
Actor.belongsToMany(Episode, { through: EpisodeActor });


//MANY TO ONE
Movie.belongsTo(Director, {
    foreignKey: "directorId",
    targetKey: "id",
  })
Director.hasMany(Movie, {
    foreignKey: "directorId",
    sourceKey: "id",
  })

TvShow.hasMany(Season, {
    foreignKey: "tvShowId",
    sourceKey: "id",
  });
Season.belongsTo(TvShow, {
    foreignKey: "tvShowId",
    targetKey: "id",
  })

TvShow.hasMany(Episode, {
    foreignKey: "tvShowId",
    sourceKey: "id",
  });
Episode.belongsTo(TvShow, {
    foreignKey: "tvShowId",
    targetKey: "id",
  })

Season.hasMany(Episode , {
    foreignKey: "seasonId",
    sourceKey: "id",
  })
Episode.belongsTo(Season, {
    foreignKey: "seasonId",
    targetKey: "id",
  })



