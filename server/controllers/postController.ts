import { Request, Response } from "express";
import Post from "../models/Post";
import { getDate } from "../utils/getDate";
import { getReadTime } from "../utils/getReadTime";
import fs from 'fs';


export class PostController {
    async createPost(req: Request, res: Response) {
        try {

            const { title, body } = req.body as { title: string, body: string }

            if (title && body) {
                const existPost = await Post.findOne({ title });

                if (existPost) {
                    return res.json({ message: false })
                }

                const date = getDate();
                const time = getReadTime(body.length);

                const post = new Post({ title, body, date, time })

                if (req.file) {
                    const image = req.file.filename;

                    post.image = image
                }

                await post.save();

                return res.json({ message: true })

            }

            return res.json({ message: false })

        } catch (e) {
            console.log(e);
        }
    }

    async deletePost(req: Request, res: Response) {
        try {

            const { id } = req.query as { id: string };

            if (id) {
                const post = await Post.findById(id);

                if (!post) {
                    return res.json({ message: false })
                }

                const nameImage = post.image;

                await Post.findByIdAndDelete(id);

                if (nameImage) {
                    fs.unlink(`uploads/post/${nameImage}`, () => { })
                }

                return res.json({ message: true })

            }

            return res.json({ message: false })

        } catch (e) {
            console.log(e);
        }

    }

    async updatePost(req: Request, res: Response) {

        try {

            const { title, body, id } = req.body as { title: string, body: string, id: string }

            if (title && body && id) {


                const post = await Post.findById(id);

                if (post) {


                    const time = getReadTime(body.length);


                    if (req.file) {

                        const image = req.file.filename;

                        await Post.findByIdAndUpdate(id, { title, body, time, image }, { new: true })

                        return res.json({ message: true })

                    }

                    await Post.findByIdAndUpdate(id, { title, body, time }, { new: true })

                    return res.json({ message: true })

                }

                return res.json({ message: false })

            }
            return res.json({ message: false })

        } catch (e) {
            console.log(e);
        }

    }

    async getPosts(req: Request, res: Response) {

        try {

            const posts = await Post.find();

            if (!posts) {
                return res.json({ message: false });
            }

            return res.json(posts);

        } catch (e) {
            console.log(e);
        }

    }

    async getPost(req: Request, res: Response) {

        try {

            const { id } = req.query as { id: string }

            if (id) {
                const post = await Post.findById(id);

                if (!post) {
                    return res.json({ message: false })
                }

                return res.json({ post });

            }

            return res.json({ message: false });

        } catch (e) {
            console.log(e)
        }

    }
}
