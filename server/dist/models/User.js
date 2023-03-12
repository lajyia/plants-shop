"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String },
    city: { type: String },
    address: { type: String },
    number: { type: Number },
    name: { type: String },
    surname: { type: String },
    nickname: { type: String, required: true, unique: true },
    roles: [{ type: String, ref: 'Role' }]
});
exports.default = (0, mongoose_1.model)("User", User);
