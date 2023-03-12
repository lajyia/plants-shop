"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const Post_1 = __importDefault(require("../models/Post"));
const getDate_1 = require("../utils/getDate");
const getReadTime_1 = require("../utils/getReadTime");
const fs_1 = __importDefault(require("fs"));
class PostController {
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, body } = req.body;
                if (title && body) {
                    const existPost = yield Post_1.default.findOne({ title });
                    if (existPost) {
                        return res.json({ message: false });
                    }
                    const date = (0, getDate_1.getDate)();
                    const time = (0, getReadTime_1.getReadTime)(body.length);
                    const post = new Post_1.default({ title, body, date, time });
                    if (req.file) {
                        const image = req.file.filename;
                        post.image = image;
                    }
                    yield post.save();
                    return res.json({ message: true });
                }
                return res.json({ message: false });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                if (id) {
                    const post = yield Post_1.default.findById(id);
                    if (!post) {
                        return res.json({ message: false });
                    }
                    const nameImage = post.image;
                    yield Post_1.default.findByIdAndDelete(id);
                    if (nameImage) {
                        fs_1.default.unlink(`uploads/post/${nameImage}`, () => { });
                    }
                    return res.json({ message: true });
                }
                return res.json({ message: false });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, body, id } = req.body;
                if (title && body && id) {
                    const post = yield Post_1.default.findById(id);
                    if (post) {
                        const time = (0, getReadTime_1.getReadTime)(body.length);
                        if (req.file) {
                            const image = req.file.filename;
                            yield Post_1.default.findByIdAndUpdate(id, { title, body, time, image }, { new: true });
                            return res.json({ message: true });
                        }
                        yield Post_1.default.findByIdAndUpdate(id, { title, body, time }, { new: true });
                        return res.json({ message: true });
                    }
                    return res.json({ message: false });
                }
                return res.json({ message: false });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield Post_1.default.find();
                if (!posts) {
                    return res.json({ message: false });
                }
                return res.json(posts);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                if (id) {
                    const post = yield Post_1.default.findById(id);
                    if (!post) {
                        return res.json({ message: false });
                    }
                    return res.json({ post });
                }
                return res.json({ message: false });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.PostController = PostController;
