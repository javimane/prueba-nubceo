import { Request, Response } from 'express';
import { TvShow } from '../models/tvshow';
import { Episode } from '../models/episode';
import { Season } from '../models/season';
import { Actor } from '../models/actor';
import { Director } from '../models/director';





// GET /tvshow/:id
export const  getTvShow = async(req: Request, res: Response) =>{
  //Try to find one TvShow
  try {
    const { id } = req.params
    const tvShow = await TvShow.findByPk(id,{
      
        include: [{
            model : Episode,
            attributes: ['name', 'date', 'seasonId']
        },
        ]
    }
      )
      // Return the episode to the client.
    res.json(tvShow)
  } catch (error) {
    // Throw an error if something goes wrong.
    throw new Error('Error returning TvShow');
  }
}
//GET "/tvshows"
export const  getAllTvShow = async(req: Request, res: Response) =>{
  // Try to find all TvShows.
  try {
    const tvShows = await TvShow.findAll()
    // Return all episodes to the client.
    res.json(tvShows)
  } catch (error) {
    // Throw an error if something goes wrong.
    throw new Error('Error returning  all TvShows');
  }
}

// Get "/tvshows/:tvShowId/episodes/:episodeId"
export const getTvShowEpisode = async (req: Request, res: Response) => {
  // Try to find the episode with the specified ID.
  try {
    const { tvShowId, episodeId } = req.params;
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
    res.json(episode);
  } catch (error) {
    // Throw an error if something goes wrong.
    throw new Error('Error returning episode');
  }
}