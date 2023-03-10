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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const registrationRouter_1 = __importDefault(require("./routers/registrationRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const LOGIN_DB = process.env.LOGIN_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;
const NAME_DB = process.env.NAME_DB;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/registration', registrationRouter_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.listen(PORT, () => {
            console.log('App working on port ' + PORT);
        });
        yield mongoose_1.default.connect(`mongodb+srv://${LOGIN_DB}:${PASSWORD_DB}@cluster0.apjmp4j.mongodb.net/${NAME_DB}?retryWrites=true&w=majority`);
    }
    catch (e) {
        console.log(e);
    }
});
start();
