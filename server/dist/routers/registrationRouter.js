"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registrationController_1 = require("../controllers/registrationController");
const controller = new registrationController_1.registrationController();
const registrationRouter = express_1.default.Router();
registrationRouter.post('/', controller.registration);
exports.default = registrationRouter;
