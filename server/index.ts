import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import registrationRouter from './routers/registrationRouter';



dotenv.config();

const app = express();

const PORT = process.env.PORT;
const LOGIN_DB = process.env.LOGIN_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;
const NAME_DB = process.env.NAME_DB;


app.use(cors());
app.use(express.json());


app.use('/registration', registrationRouter);


const start = async () =>{
    try{
        app.listen(PORT, () =>{
            console.log('App working on port ' + PORT);
        })

        await mongoose.connect(`mongodb+srv://${LOGIN_DB}:${PASSWORD_DB}@cluster0.apjmp4j.mongodb.net/${NAME_DB}?retryWrites=true&w=majority`)

    }catch(e){
        console.log(e);
    }
}


start();