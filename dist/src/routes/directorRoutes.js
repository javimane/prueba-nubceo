"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const directorController_1 = require("../controllers/directorController");
const validate_token_1 = __importDefault(require("../middlewares/validate-token"));
const router = (0, express_1.Router)();
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
router.post('/', validate_token_1.default, directorController_1.createDirector);
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
exports.default = router;
//# sourceMappingURL=directorRoutes.js.map