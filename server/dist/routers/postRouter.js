"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = require("../controllers/postController");
const uploadPostImage_1 = require("../middlewares/uploadPostImage");
const controller = new postController_1.PostController();
const postRouter = express_1.default.Router();
postRouter.post('/create', uploadPostImage_1.upload.single('image'), controller.createPost);
postRouter.post('/delete', controller.deletePost);
postRouter.post('/update', uploadPostImage_1.upload.single('image'), controller.updatePost);
postRouter.get('/post', controller.getPost);
postRouter.get('/posts', controller.getPosts);
exports.default = postRouter;
