"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
//POST
router.post('/', userController_1.newUser);
//POST
router.post('/login', userController_1.loginUser);
//POST
router.post('/refreshToken', userController_1.refreshToken);
/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 10
 *         username:
 *           type: string
 *           example: Pepe
 *         password:
 *           type: string
 *           example: 12345
 *         refreshToken:
 *           type: string
 *           example: gfdfgdg4577/*
 */
/**
 * @swagger
 * /api/users/:
 *   post:
 *     summary: Create a new user.
 *     description: Create a new user.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User successfully created.
 *       400:
 *         description: A user with the same name already exists.
 */
/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Authenticate an existing user.
 *     description: Authenticate an existing user with the data provided..
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User successfully authenticated.
 *         content:
 *          application/json:
 *           schema:
 *            type: object
 *            properties:
 *             token:
 *              type: string
 *              description: Access Token.
 *             refreshToken:
 *              type: string
 *              description: Refresh Token.
 */
/**
* @swagger
* /api/users/refreshToken:
*   post:
*     summary: Refreshes an access token.
*     description: Refreshes an access token using a refresh token.
*     requestBody:
*      required: true
*      content:
*       application/json:
*        schema:
*         type: object
*         properties:
*           refreshToken:
*            type: string
*            description: The refresh token.
*            example: "you must put your refreshToken"
*     responses:
*      200:
*       description: The access token was refreshed successfully.
*       content:
*        application/json:
*         schema:
*          type: object
*          properties:
*            accessToken:
*              type: string
*              description: The new access token.
*              example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
*      400:
*       description: Bad request. The request body is invalid.
*       content:
*        application/json:
*         schema:
*          type: object
*          properties:
*            error:
*              type: string
*              description: The error message.
*      401:
*       description: Unauthorized. The refresh token is invalid or expired.
*       content:
*        application/json:
*         schema:
*          type: object
*          properties:
*            error:
*              type: string
*              description: The error message.
*      403:
*       description: Forbidden. The refresh token is not found.
*       content:
*        application/json:
*         schema:
*          type: object
*          properties:
*            error:
*              type: string
*              description: The error message.
*/
exports.default = router;
//# sourceMappingURL=userRoutes.js.map