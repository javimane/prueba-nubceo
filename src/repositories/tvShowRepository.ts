import { Actor } from "../models/actor";
import { Director } from "../models/director";
import { Episode } from "../models/episode";
import { TvShow } from "../models/tvshow";

class TvShowRepository {

    async  getTvShow (id : string) {
        //Try to find one TvShow
        try { 
          const tvShow = await TvShow.findByPk(id,{
              include: [{
                  model : Episode,
                  attributes: ['name', 'date', 'seasonId']
              },
              ]
          }
            )
            // Return the episode to the client.
          return tvShow;
        } catch (error) {
          // Throw an error if something goes wrong.
          throw new Error('Error returning TvShow');
        }
      }
      //GET "/tvshows"
      async  getAllTvShow(){
        // Try to find all TvShows.
        try {
          const tvShows = await TvShow.findAll()
          // Return all episodes to the client.
          return tvShows;
        } catch (error) {
          // Throw an error if something goes wrong.
          throw new Error('Error returning  all TvShows');
        }
      }
      
      // Get "/tvshows/:tvShowId/episodes/:episodeId"
      async getTvShowEpisode (tvShowId: string, episodeId: string) {
        // Try to find the episode with the specified ID.
        try {
          const episode = await Episode.findOne({
            where: {
              id: episodeId,
              tvShowId: tvShowId,
            },
            attributes: [ 'id', 'name', 'date', 'seasonId'],
            include: [{
              model : Director,
              attributes: ['name'],
              through: {
                attributes: [],
               },
              },
              {
              model: Actor,
              attributes: ['name'],
              through: {
               attributes: [],
              },
              }
            ]
          });
          // Return the episode to the client.
          return episode;
        } catch (error) {
          // Throw an error if something goes wrong.
          throw new Error('Error returning episode');
        }
      }

}
export default new TvShowRepository();