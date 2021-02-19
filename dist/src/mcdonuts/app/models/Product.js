"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var connection_1 = __importDefault(require("../db/connection"));
var IngredientSchema = new mongoose_1.Schema({
    material: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});
var ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        default: null,
    },
    cost: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    image: {
        type: String,
        required: true,
    },
    ingredients: [IngredientSchema],
}, {
    timestamps: true,
});
exports.default = connection_1.default.model('Product', ProductSchema);
