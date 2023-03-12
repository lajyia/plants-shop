"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rolesController_1 = require("../controllers/rolesController");
const rolesRouter = express_1.default.Router();
const controller = new rolesController_1.RolesController();
rolesRouter.post('/upgrade', controller.upgrade);
rolesRouter.post('/upgrade', controller.downgrade);
exports.default = rolesRouter;
