import { Router } from 'express';
import { celebrate } from 'celebrate';
import CategoryController from '../app/controllers/CategoryController';
import { IValidationsCategory } from './routesDTO';
import Authentication from '../middlewares/Authentication';
import Authorization from '../middlewares/Authorization';

export class CategoryRoutes {
  constructor(private routes: Router) { }

  getRoutes(validations: IValidationsCategory) {
    this.routes.get('/nutricionistajacquelinethedim/categorys', CategoryController.index);
    this.routes.get(
      '/nutricionistajacquelinethedim/categorys/:name',
      celebrate({ params: validations.paramName }),
      CategoryController.show,
    );
    this.routes.post(
      '/nutricionistajacquelinethedim/categorys',
      Authentication,
      Authorization,
      celebrate({ body: validations.category }),
      CategoryController.store,
    );
    this.routes.put(
      '/nutricionistajacquelinethedim/categorys/:id',
      Authentication,
      Authorization,
      celebrate({ body: validations.category, params: validations.paramId }),
      CategoryController.update,
    );
    this.routes.delete(
      '/nutricionistajacquelinethedim/categorys/:id',
      Authentication,
      Authorization,
      celebrate({ params: validations.paramId }),
      CategoryController.delete,
    );
  }
}
