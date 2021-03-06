import { Joi } from 'celebrate';

const comment = {
  name: Joi.string().required(),
  mensage: Joi.string().required(),
};

export const Item = Joi.object().keys({
  name:Joi.string().required(),
  photo: Joi.string().required(),
  linkpagament: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  linkvideo: Joi.string().required(),
  comments: Joi.array().items(comment).required(),
});

export const ItemComment = Joi.object().keys({
  comments: Joi.array().items(comment).required(),
});