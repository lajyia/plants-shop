import express, {Router} from 'express';
import { registrationController } from '../controllers/registrationController';

const controller = new registrationController();

const registrationRouter: Router = express.Router();


registrationRouter.post('/', controller.registration);


export default registrationRouter
