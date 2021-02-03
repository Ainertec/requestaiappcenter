"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdate = exports.user = void 0;
var celebrate_1 = require("celebrate");
exports.user = celebrate_1.Joi.object().keys({
    username: celebrate_1.Joi.string().required(),
    password: celebrate_1.Joi.string().required(),
    question: celebrate_1.Joi.string().required(),
    response: celebrate_1.Joi.string().required(),
    admin: celebrate_1.Joi.boolean(),
});
exports.userUpdate = celebrate_1.Joi.object().keys({
    username: celebrate_1.Joi.string(),
    password: celebrate_1.Joi.string(),
    question: celebrate_1.Joi.string(),
    response: celebrate_1.Joi.string(),
    admin: celebrate_1.Joi.boolean(),
});
exports.default = exports.user;
