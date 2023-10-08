import { Request, Response } from 'express';
import { Movie } from '../models/movie';
import { Op, OrderItem,  } from 'sequelize';
import { Actor } from '../models/actor';
import "../models/intermediateTable/movieActor"
import { Director } from '../models/director';

//GET /api/movies
export const getAllMovies = async (req: Request, res: Response) =>{
   // Try to find all movies.
    try{ const listMovies = await Movie.findAll({
    attributes: [ 'id', 'title', 'date', 'gender'],
    include: [
        {
          model: Director, 
          attributes: ['name'],
          

        },
        {
          model: Actor,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      ],
    
   });
        // Return all movies.
        res.json(listMovies);
        } catch (error) {
        // Throw an error if something goes wrong.
          throw new Error('Error retrieving all Movies');
        }
}
//GET /api/movies/:id
export const getMovie = async (req: Request, res: Response) =>{
    //Try to find the specific Movie by Id
    try {
        const { id } = req.params
        const movie = await Movie.findByPk(id,{
            include: [{
                model : Director,
                attributes: ['name']
            },
            {
                model: Actor,
                attributes: ['name'],
                through: {
                 attributes: [],
                },
            }
            ]
        })
        //Return the movie
        res.json(movie)
      } catch (error) {
        // Throw an error if something goes wrong.
        throw new Error('Error retrieving Movie');
      }
}

//POST /api/movies/
export const searchMoviesByTitle = async (req: Request, res: Response) => {
    const { title, order } = req.query;
  
    // Create a where clause to filter the results by movie title.
    const whereClause = {
      title: { [Op.like]: `%${title}%` } 
    
    };
    // Determine the order in which to return the results.
    const orderItems = order === '1' ? [['title']] : order === '-1' ? [['title', 'DESC']] : [];
    
    // Try to find all movies that match the search criteria.
  try{  const movies = await Movie.findAll({
      where: whereClause,
      attributes: ['id', 'title', 'date', 'gender'],
        include: [
          {
            model: Director,
            attributes: ['name'],
            
          },
          {
            model: Actor,
            attributes: ['name'],
            through: {
              attributes: [],
            },
          },
        ],
      order: orderItems.map((item) => item as OrderItem),
    });
    // Return the matching movies.
    return res.json(movies);
    } catch (error) {
    // Throw an error if something goes wrong.
     throw new Error('Error searching movies');
    }
  };


  