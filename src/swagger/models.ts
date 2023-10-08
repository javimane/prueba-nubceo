
      //  Actor
/**
 * @openapi
 * components:
 *   schemas:
 *     Actor:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 5
 *         name:
 *           type: string
 *           example: Robert
 *         age:
 *           type: integer
 *           example: 47
 *         gander:
 *           type: string
 *           example: Male
 */

     //  Season
/**
 * @openapi
 * components:
 *   schemas:
 *     Season:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 1
 *         name:
 *           type: date
 *           example: 2020/10/22
 *         tvShowId:
 *           type: integer
 *           example: 1
 */
     // Episode
/**
 * @openapi
 * components:
 *   schemas:
 *     Episode:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 5
 *         name:
 *           type: string
 *           example: 1
 *         date:
 *           type: date
 *           example: 2020/01/23
 *         tvShowId:
 *           type: integer
 *           example: 1
 *         seasonId:
 *           type: integer
 *           example: 3
 */
        // DirectorEpisode
/**
 * @openapi
 * components:
 *   schemas:
 *     DirectorEpisode:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 5
 *         directorId:
 *           type: integer
 *           example: 1
 *         episodeId:
 *           type: integer
 *           example: 47
 */
        //EpisodeActor
/**
 * @openapi
 * components:
 *   schemas:
 *     EpisodeActor:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 5
 *         episodeId:
 *           type: integer
 *           example: 2
 *         actorId:
 *           type: integer
 *           example: 10
 */
      // MovieActor
/**
 * @openapi
 * components:
 *   schemas:
 *     MovieActor:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 5
 *         movieId:
 *           type: integer
 *           example: 1
 *         actorId:
 *           type: integer
 *           example: 47
 */

          //   TvShow Actor
/**
 * @openapi
 * components:
 *   schemas:
 *     TvShowActor:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 2
 *         tvShowIdId:
 *           type: integer
 *           example: 2
 *         ActorId:
 *           type: integer
 *           example: 10
 */