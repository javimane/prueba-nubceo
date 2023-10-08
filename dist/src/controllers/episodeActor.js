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
exports.createMovie = void 0;
const actor_1 = require("../models/actor");
const tvshow_1 = require("../models/tvshow");
//GET "/episode/actors"
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const episode = yield tvshow_1.TvShow.findAll({
            include: {
                model: actor_1.Actor,
            },
        });
        res.json(episode);
    }
    catch (error) {
        console.error(error);
        console.error(error.name);
        res.status(500).json({ error: error.message });
    }
});
exports.createMovie = createMovie;
studentsCoursesRouter.get("/courses/students", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield Course.findAll({
            include: {
                model: Student,
            },
        });
        res.json(courses);
    }
    catch (error) {
        console.error(error);
        console.error(error.name);
        res.status(500).json({ error: error.message });
    }
}));
exports.default = studentsCoursesRouter;
//# sourceMappingURL=episodeActor.js.map