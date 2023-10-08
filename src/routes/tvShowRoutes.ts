import { Router } from "express";
import validateToken from "../middlewares/validate-token";
import { getAllTvShow, getTvShow, getTvShowEpisode } from "../controllers/tvShowController";




const router = Router();
// GET 
router.get('/:id' ,validateToken, getTvShow )
// GET 
router.get('/' ,validateToken, getAllTvShow)
// GET 
router.get('/:tvShowId/episodes/:episodeId' ,validateToken, getTvShowEpisode)
/**
 * @swagger
 * /api/tvshows/{id}:
 *   get:
 *     summary: Gets information about a TV series.
 *     description: Gets information about a TV series from the ID provided..
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Tv Show Id.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Information of the Tv Show.
 */

/**
 * @swagger
 * /api/tvshows/:
 *   get:
 *     summary: Gets information on all TV series.
 *     description: Gets information on all available TV series.
 *     security:
 *       - bearerAuth: [] 
 *     responses:
 *       200:
 *         description: Information on all TV series.
 */

/**
 * @swagger
 * /api/tvshows/{tvShowId}/episodes/{episodeId}:
 *   get:
 *     summary: Gets information about a specific episode of a TV series..
 *     description: Gets information about a specific episode of a TV series from the ID provided..
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: tvShowId
 *         required: true
 *         description: Tv Show Id.
 *         schema:
 *           type: integer
 *       - in: path
 *         name: episodeId
 *         required: true
 *         description: Episode Id.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Episode-specific information.
 */


export default  router;
