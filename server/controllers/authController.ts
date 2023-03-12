import { Request, Response } from 'express';
import Post from '../models/Post';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Role from '../models/Role';


const SECRET_KEY = process.env.JWT_SECRET;

export class AuthController {
    async registration(req: Request, res: Response) {

        try {

            const { email, password, nickname } = req.query as { email: string, password: string, nickname: string };

            if (email && password && nickname) {

                const candidateEmail = await User.findOne({ email });
                const candidateNickname = await User.findOne({ nickname });

                if (candidateEmail) {
                    return res.json({ message: 'Email is busy' })
                }

                if (candidateNickname) {
                    return res.json({ message: 'Nickname is busy' })
                }


                const hashPassword = bcrypt.hashSync(password, 7);


                const users = await User.find();


                let roles = [];


                const buyerRole = await Role.findOne({value: "BUYER"})
                const adminRole = await Role.findOne({value: "ADMIN"})

                const buyerRoleBody = buyerRole?.value;
                const adminRoleBody = adminRole?.value;

                {users
                    ? roles = [buyerRoleBody, adminRoleBody]
                    : roles = [buyerRoleBody]; 
                }

                const user = new User({ email, password: hashPassword, nickname, roles });

                await user.save();

                return res.json({ message: true })

            }

            return res.json({ message: false })

        } catch (e) {
            console.log(e);
        }
    }

    async delete(req: Request, res: Response) {
        try {

            const { id } = req.query as { id: string };

            if (id) {

                await User.findByIdAndDelete(id);

                return res.json({ message: true })

            }

            return res.json({ message: false })


        } catch (e) {
            console.log(e)
        }
    }


    async login(req: Request, res: Response) {
        try {

            const { nickname, password } = req.query as { nickname: string, password: string }

            if (nickname && password) {

                const user = await User.findOne({ nickname });

                if (user) {

                    const passwordUser = user.password;
                    const isLogin = bcrypt.compareSync(password, passwordUser);

                    if (!isLogin) {
                        return res.json({ message: false });
                    }

                    if (SECRET_KEY) {
                        const token = jwt.sign({
                            id: user._id,
                        }, SECRET_KEY, { expiresIn: '30d' })

                        return res.json({message: true, token})
                    }
                    return res.json({message: 'Error key'})

                }

                return res.json({ message: false })

            }

            return res.json({ message: false })

        } catch (e) {
            console.log(e)
        }
    }
}