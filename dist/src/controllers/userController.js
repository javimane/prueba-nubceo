"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//POST /api/users/
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Validate if the user already exists in the database.
    const user = yield user_1.User.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        });
    }
    //We encrypt the password in the database
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        // Save the user en the database
        yield user_1.User.create({
            username: username,
            password: hashedPassword
        });
        res.json({
            msg: `Usuario ${username} creado exitosamente!`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        });
    }
});
exports.newUser = newUser;
//POST /api/users/login
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the username and password from the request body.
    const { username, password } = req.body;
    // Try to find the user with the specified username.
    const user = yield user_1.User.findOne({ where: { username: username } });
    // If the user does not exist, return an error.
    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username} en la base datos`,
        });
    }
    // Validate the password.
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: 'Password Incorrecta',
        });
    }
    // Generate a JSON Web Token (JWT).
    const token = jsonwebtoken_1.default.sign({
        username: username,
    }, process.env.SECRET_KEY || 'new12356', { expiresIn: '2d' });
    // Generate a refresh token.
    const refreshToken = jsonwebtoken_1.default.sign({
        username: username,
    }, process.env.SECRET_KEY || 'refresh123', { expiresIn: '1w' });
    // Save the refresh token to the user's record.
    user.refreshToken = refreshToken;
    yield user.save();
    // Return the JWT and refresh token to the client.
    res.json({
        token,
        refreshToken,
    });
});
exports.loginUser = loginUser;
//POST /api/refrestToken
const refreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
        return res.sendStatus(401);
    }
    // We verify the refresh token
    try {
        jsonwebtoken_1.default.verify(refreshToken, process.env.SECRET_KEY);
    }
    catch (err) {
        return res.sendStatus(403).json({ error: "Invalid refresh token" });
    }
    // We get the user from the refresh token
    const user = yield user_1.User.findOne({ where: { refreshToken: refreshToken } });
    // We generate a new refresh token
    const newRefreshToken = jsonwebtoken_1.default.sign({
        username: user.username
    }, process.env.SECRET_KEY, { expiresIn: '1w' });
    // We update the refresh token on the user
    user.refreshToken = newRefreshToken;
    yield user.save();
    // We return the new refresh token
    res.json({ newRefreshToken });
});
exports.refreshToken = refreshToken;
//# sourceMappingURL=userController.js.map