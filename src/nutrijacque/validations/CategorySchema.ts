import { Joi } from 'celebrate';
import validObjectId from './validObjectId';

const Item = Joi.custom(validObjectId, 'valid id');


const category = Joi.object().keys({
  name: Joi.string().required(),
  items: Joi.array().items(Item).required(),

  /*accommodation: Joi.array().items(accommodation).required(),*/
});

export default category;
