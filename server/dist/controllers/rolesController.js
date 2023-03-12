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
exports.RolesController = void 0;
const Role_1 = __importDefault(require("../models/Role"));
const User_1 = __importDefault(require("../models/User"));
class RolesController {
    upgrade(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                if (id) {
                    const user = yield User_1.default.findById(id);
                    if (user) {
                        const moderatorRole = yield Role_1.default.findOne({ value: "MODERATOR" });
                        if (moderatorRole) {
                            const updateRoles = [...user.roles, ...moderatorRole.value];
                            yield User_1.default.findByIdAndUpdate(id, { roles: updateRoles }, { new: true });
                            return res.json({ message: true });
                        }
                        return res.json({ message: false });
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
    downgrade(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                if (id) {
                    const user = yield User_1.default.findById(id);
                    if (user) {
                        const updateRoles = [...user.roles];
                        for (let i = 0; i < updateRoles.length; i++) {
                            if (updateRoles[i] === "MODERATOR") {
                                updateRoles.splice(i, 1);
                            }
                        }
                        yield User_1.default.findByIdAndUpdate(id, { roles: updateRoles }, { new: true });
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
}
exports.RolesController = RolesController;
