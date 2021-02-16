"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-param-reassign */
var mongoose_1 = require("mongoose");
var connection_1 = __importDefault(require("../db/connection"));
var CommentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        default: null,
    },
    mensage: {
        type: String,
        default: null,
    },
});
var ItemSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    linkpagament: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    linkvideo: {
        type: String,
        required: true,
    },
    comments: [CommentSchema]
}, {
    timestamps: true,
});
exports.default = connection_1.default.model('Item', ItemSchema);
