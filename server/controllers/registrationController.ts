import {Request, Response} from 'express';

export class registrationController{
    async registration(req: Request, res: Response){
        try{

        }catch(e){
            console.log(e);
        }
        const {email, password} = req.query;
    }
}