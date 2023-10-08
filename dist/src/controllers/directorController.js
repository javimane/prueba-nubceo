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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirector = void 0;
const director_1 = require("../models/director");
//POST /api/directors/
const createDirector = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age, gender } = req.body;
        // Created the director
        const newDirector = yield director_1.Director.create({
            name,
            age,
            gender,
        });
        // We respond with the film created
        res.json(newDirector);
    }
    catch (error) {
        throw new Error('Error creating Director');
    }
});
exports.createDirector = createDirector;
//# sourceMappingURL=directorController.js.map