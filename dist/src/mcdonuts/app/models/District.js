"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var connection_1 = __importDefault(require("../db/connection"));
var DistrictSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = connection_1.default.model('District', DistrictSchema);
