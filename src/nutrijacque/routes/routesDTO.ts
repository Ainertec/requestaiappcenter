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
  item: Joi.ObjectSchema;
  paramId: IParamId;
}