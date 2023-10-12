import { Request, Response } from 'express';
import { Movie } from '../models/movie';
import { Op, OrderItem,  } from 'sequelize';
import { Actor } from '../models/actor';
import "../models/intermediateTable/movieActor"
import { Director } from '../models/director';
import movieRepository from '../repositories/movieRepository';
//GET /api/movies
export const getAllMovies = async (req: Request, res: Response) =>{
   // Try to find all movies.
    try{ const listMovies = await movieRepository.getAllMovies();
        // Return all movies.
        res.json(listMovies);
        } catch (error: any) {
        // Throw an error if something goes wrong.
          res.status(500).json( {message: error.message});
        }
}
//GET /api/movies/:id
export const getMovie = async (req: Request, res: Response) =>{
    //Try to find the specific Movie by Id
    try {
        const { id } = req.params
        const movie = await movieRepository.getMovie(id);
        //Return the movie
        res.json(movie)
      } catch (error: any) {
        // Throw an error if something goes wrong.
        res.status(500).json({ message: error.message });
      }
}

//POST /api/movies/
export const searchMoviesByTitle = async (req: Request, res: Response) => {
    const title = req.query.title as string;
    const order = req.query.order as string;
    try{
      const movies = await movieRepository.searchMoviesByTitle(title, order);
    
    return res.json(movies);
    } catch (error: any) {
    
      res.status(500).json({ message: error.message });
    }
  };


  