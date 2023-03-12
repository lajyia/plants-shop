"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = require("../controllers/postController");
const uploadPostImage_1 = require("../middlewares/uploadPostImage");
const controller = new postController_1.PostController();
const authRouter = express_1.default.Router();
authRouter.post('/create', uploadPostImage_1.upload.single('image'), controller.createPost);
authRouter.post('/delete', controller.deletePost);
authRouter.post('/update', uploadPostImage_1.upload.single('image'), controller.updatePost);
authRouter.get('/post', controller.getPost);
authRouter.get('/posts', controller.getPosts);
exports.default = authRouter;
