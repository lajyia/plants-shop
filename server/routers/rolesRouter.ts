import express,{ Router } from "express";
import { RolesController } from "../controllers/rolesController";


const rolesRouter:Router = express.Router();

const controller = new RolesController();


rolesRouter.post('/upgrade', controller.upgrade )
rolesRouter.post('/upgrade', controller.downgrade);


export default rolesRouter