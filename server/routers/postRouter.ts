import express ,{ Router } from "express";
import { PostController } from "../controllers/postController";
import { upload } from "../middlewares/uploadPostImage";


const controller = new PostController();

const authRouter:Router = express.Router();

authRouter.post('/create', upload.single('image'), controller.createPost);
authRouter.post('/delete', controller.deletePost);
authRouter.post('/update', upload.single('image'), controller.updatePost);
authRouter.get('/post', controller.getPost);
authRouter.get('/posts', controller.getPosts)


export default authRouter