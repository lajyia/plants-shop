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
exports.AuthController = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Role_1 = __importDefault(require("../models/Role"));
class AuthController {
    registration(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, nickname } = req.query;
                if (email && password && nickname) {
                    const candidateEmail = yield User_1.default.findOne({ email });
                    const candidateNickname = yield User_1.default.findOne({ nickname });
                    if (candidateEmail) {
                        return res.json({ message: 'Email is busy' });
                    }
                    if (candidateNickname) {
                        return res.json({ message: 'Nickname is busy' });
                    }
                    const hashPassword = bcrypt_1.default.hashSync(password, 7);
                    const users = yield User_1.default.find();
                    let roles = [];
                    const buyerRole = yield Role_1.default.findOne({ value: "BUYER" });
                    const adminRole = yield Role_1.default.findOne({ value: "ADMIN" });
                    const buyerRoleBody = buyerRole === null || buyerRole === void 0 ? void 0 : buyerRole.value;
                    const adminRoleBody = adminRole === null || adminRole === void 0 ? void 0 : adminRole.value;
                    {
                        users
                            ? roles = [buyerRoleBody, adminRoleBody]
                            : roles = [buyerRoleBody];
                    }
                    const user = new User_1.default({ email, password: hashPassword, nickname, roles });
                    yield user.save();
                    return res.json({ message: true });
                }
                return res.json({ message: false });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                if (id) {
                    yield User_1.default.findByIdAndDelete(id);
                    return res.json({ message: true });
                }
                return res.json({ message: false });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nickname, password } = req.query;
                if (nickname && password) {
                    const user = yield User_1.default.findOne({ nickname });
                    if (user) {
                        const passwordUser = user.password;
                        const isLogin = bcrypt_1.default.compareSync(password, passwordUser);
                        if (!isLogin) {
                            return res.json({ message: false });
                        }
                        const JWT_SECRET = process.env.JWT_SECRET;
                        if (JWT_SECRET) {
                            const token = jsonwebtoken_1.default.sign({
                                id: user._id,
                            }, JWT_SECRET, { expiresIn: '30d' });
                            return res.json({ message: true, token });
                        }
                        return res.json({ message: 'Error key' });
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
exports.AuthController = AuthController;
