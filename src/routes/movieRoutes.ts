import { Router } from 'express';
import {  getAllMovies, getMovie, searchMoviesByTitle } from '../controllers/movieController';
import validateToken from '../middlewares/validate-token';


const router = Router();
/**
 * @openapi
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 61
 *         name:
 *           type: string
 *           example: Terminator
 *         gender:
 *           type: string
 *           example: Action
 *         date:
 *           type: date
 *           example: 1985/02/25
 *         actors:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Arnold", "John Connor"]
 *         director:
 *           type: string
 *           example: James Cameron
 */
//POST
router.post('/' ,validateToken, searchMoviesByTitle)
/**
 * @swagger
 * /api/movies/:
 *   post:
 *     summary: Search movies by title.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *         description: Title of the movie.
 *       - in: query
 *         name: order
 *         required: true
 *         schema:
 *          type: integer
 *          enum: [1, -1]
 *          description: The order in which to return the results. 1 for ascending order, -1 for descending order.
 *        
 *     responses:
 *       200:
 *         description: A list of movies that match the search criteria.
 */

// GET 
router.get('/:id' ,validateToken, getMovie)
/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Get a movie
 *     description: Retrieve a specific movie
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Movie Id.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Information about the movie
 *         content:
 *          application/json:
 *           schema:
 *            type: array
 *            items:
 *             $ref: "#/components/schemas/Movie"
 */


// GET 
router.get('' ,validateToken, getAllMovies)
/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all movies
 *     description: Retrieve all movies from the database
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of movies
 *         content:
 *          application/json:
 *           schema:
 *            type: array
 *            items:
 *             $ref: "#/components/schemas/Movie"
 */



export default  router;