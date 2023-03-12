import express ,{ Router } from "express";
import { PostController } from "../controllers/postController";
import { upload } from "../middlewares/uploadPostImage";


const controller = new PostController();

const postRouter:Router = express.Router();

postRouter.post('/create', upload.single('image'), controller.createPost);
postRouter.post('/delete', controller.deletePost);
postRouter.post('/update', upload.single('image'), controller.updatePost);
postRouter.get('/post', controller.getPost);
postRouter.get('/posts', controller.getPosts)


export default postRouter