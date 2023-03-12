"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Post = new mongoose_1.Schema({
    date: { type: String, required: true },
    time: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    body: { type: String, required: true },
    image: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('Post', Post);
