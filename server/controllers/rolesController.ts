import { Request, Response } from "express";
import Role from "../models/Role";
import User from "../models/User";


export class RolesController {
    async upgrade(req: Request, res: Response) {

        try {

            const { id } = req.query as { id: string };

            if (id) {

                const user = await User.findById(id);

                if (user) {

                    const moderatorRole = await Role.findOne({ value: "MODERATOR" });

                    if (moderatorRole) {
                        const updateRoles = [...user.roles, ...moderatorRole.value];

                        await User.findByIdAndUpdate(id, { roles: updateRoles }, { new: true })

                        return res.json({message: true})
                    }
                    return res.json({message: false});

                }

                return res.json({ message: false });

            }
            return res.json({ message: false });

        } catch (e) {
            console.log(e);
        }

    }

    async downgrade(req: Request, res: Response) {

        try {

            const { id } = req.query as { id: string };

            if (id) {

                const user = await User.findById(id);

                if (user) {


                    const updateRoles = [...user.roles];

                    for (let i =0; i < updateRoles.length ; i++){
                        if (updateRoles[i] === "MODERATOR"){
                            updateRoles.splice(i , 1)
                        }
                    }

                    await User.findByIdAndUpdate(id, {roles: updateRoles}, {new: true});

                    return res.json({message: true})

                }

                return res.json({ message: false })

            }

            return res.json({ message: false })

        } catch (e) {
            console.log(e)
        }

    }
}