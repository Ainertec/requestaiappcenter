"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var comment = {
    name: celebrate_1.Joi.string().required(),
    mensage: celebrate_1.Joi.string().required(),
};
var Item = celebrate_1.Joi.object().keys({
    name: celebrate_1.Joi.string().required(),
    photo: celebrate_1.Joi.string().required(),
    linkpagament: celebrate_1.Joi.string().required(),
    description: celebrate_1.Joi.string().required(),
    price: celebrate_1.Joi.number().required(),
    linkvideo: celebrate_1.Joi.string().required(),
    comments: celebrate_1.Joi.array().items(comment).required(),
});
exports.default = Item;
