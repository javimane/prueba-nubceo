import { Router } from 'express';
import { createDirector } from '../controllers/directorController';
import validateToken from '../middlewares/validate-token';



const router = Router();
/**
 * @openapi
 * components:
 *   schemas:
 *     Director:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 61
 *         name:
 *           type: string
 *           example: Coppola
 *         gender:
 *           type: string
 *           example: Male
 *         movies:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Terminator", "Sing"]
 */
// POST 
router.post('/' ,validateToken, createDirector)
/**
 * @swagger
 * /api/directors/:
 *   post:
 *     summary: Create a new Director.
 *     description: Create a new Director.
 *     security:
 *       - bearerAuth: [] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               gender:
 *                 type: string
 *     responses:
 *       200:
 *         description: Director successfully created.
 *       400:
 *         description: A director with the same name already exists.
 */
export default  router;
