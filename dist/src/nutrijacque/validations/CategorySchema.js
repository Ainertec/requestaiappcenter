"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var validObjectId_1 = __importDefault(require("./validObjectId"));
var Item = celebrate_1.Joi.custom(validObjectId_1.default, 'valid id');
var category = celebrate_1.Joi.object().keys({
    name: celebrate_1.Joi.string().required(),
    items: celebrate_1.Joi.array().items(Item).required(),
});
exports.default = category;
