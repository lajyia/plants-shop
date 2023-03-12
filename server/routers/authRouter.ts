import express, {Router} from 'express';
import { AuthController } from '../controllers/authController';

const controller = new AuthController();

const authRouter: Router = express.Router();


authRouter.post('/registration', controller.registration);
authRouter.post('/delete', controller.delete);
authRouter.post('/login', controller.login);


export default authRouter