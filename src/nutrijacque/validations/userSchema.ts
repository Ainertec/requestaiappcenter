import { Joi } from 'celebrate';
import validObjectId from './validObjectId';


export const user = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
  question: Joi.string().required(),
  response: Joi.string().required(),
  admin: Joi.boolean(),
});

export const userUpdate = Joi.object().keys({
  username: Joi.string(),
  password: Joi.string(),
  question: Joi.string(),
  response: Joi.string(),
  admin: Joi.boolean(),
});

export default user;
