"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const controller = new authController_1.AuthController();
const authRouter = express_1.default.Router();
authRouter.post('/registration', controller.registration);
authRouter.post('/delete', controller.delete);
authRouter.post('/login', controller.login);
exports.default = authRouter;
