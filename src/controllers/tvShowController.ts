import { Request, Response } from 'express';
import tvShowRepository from '../repositories/tvShowRepository';





// GET /tvshow/:id
export const  getTvShow = async(req: Request, res: Response) =>{
  //Try to find one TvShow
  try {
    const { id } = req.params
    const tvShow = await tvShowRepository.getTvShow(id);
      // Return the episode to the client.
    res.json(tvShow)
  } catch (error: any) {
    // Throw an error if something goes wrong.
    res.status(500).json({ message: error.message });
  }
}
//GET "/tvshows"
export const  getAllTvShow = async(req: Request, res: Response) =>{
  // Try to find all TvShows.
  try {
    const tvShows = await tvShowRepository.getAllTvShow()
    // Return all episodes to the client.
    res.json(tvShows)
  } catch (error: any) {
    // Throw an error if something goes wrong.
    res.status(500).json({ message: error.message });
  }
}

// Get "/tvshows/:tvShowId/episodes/:episodeId"
export const getTvShowEpisode = async (req: Request, res: Response) => {
  // Try to find the episode with the specified ID.
  try {
    const { tvShowId, episodeId } = req.params;
    const episode = await tvShowRepository.getTvShowEpisode( tvShowId, episodeId);
    // Return the episode to the client.
    res.json(episode);
  } catch (error: any) {
    // Throw an error if something goes wrong.
    res.status(500).json({ message: error.message });
  }
}