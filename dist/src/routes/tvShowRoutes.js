"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_token_1 = __importDefault(require("../middlewares/validate-token"));
const tvShowController_1 = require("../controllers/tvShowController");
const router = (0, express_1.Router)();
// GET 
router.get('/:id', validate_token_1.default, tvShowController_1.getTvShow);
// GET 
router.get('/', validate_token_1.default, tvShowController_1.getAllTvShow);
// GET 
router.get('/:tvShowId/episodes/:episodeId', validate_token_1.default, tvShowController_1.getTvShowEpisode);
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
exports.default = router;
//# sourceMappingURL=tvShowRoutes.js.map