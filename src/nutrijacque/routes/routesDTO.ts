/* eslint-disable camelcase */
import Joi from '@hapi/joi';

interface IParamName {
  name: Joi.StringSchema;
}
interface IParamId {
  id: Joi.AnySchema;
}
export interface IValidationsCategory {
  paramName: IParamName;
  category: Joi.ObjectSchema;
  paramId: IParamId;
}
export interface IValidationsItem {
  paramName: IParamName;
  Item: Joi.ObjectSchema;
  paramId: IParamId;
  ItemComment: Joi.ObjectSchema;
}
export interface IValidationsUser {
  user: Joi.ObjectSchema;
  userUpdate: Joi.ObjectSchema;
  paramName: IParamName;
  paramId: IParamId;
}
