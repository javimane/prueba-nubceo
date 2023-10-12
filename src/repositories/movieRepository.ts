import { Op, OrderItem } from "sequelize";
import { Director } from "../models/director";
import { Movie } from "../models/movie";
import { Actor } from "../models/actor";

class MovieRepository{

    async getAllMovies() {
        try {
          const listMovies = await Movie.findAll({
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
          });
          
          return listMovies;
        } catch (error) {
          throw new Error('Error retrieving all Movies');
        }
      }
      async getMovie (id: string) {
        try {
          const movie = await Movie.findByPk(id, {
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
          
          return movie;
        } catch (error) {
          throw new Error('Error retrieving Movie');
        }
      }

      async searchMoviesByTitle  (title: string, order: string) {
        // Create a where clause to filter the results by movie title.
        const whereClause = {
          title: { [Op.like]: `%${title}%` },
        };
        // Determine the order in which to return the results.
        const orderItems = order === '1' ? [['title']] : order === '-1' ? [['title', 'DESC']] : [];
        // Try to find all movies that match the search criteria.
        try {
          const movies = await Movie.findAll({
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
          return movies;
        } catch (error) {
            // Throw an error if something goes wrong.
          throw new Error('Error searching movies');
        }
      }
}
export default new MovieRepository();