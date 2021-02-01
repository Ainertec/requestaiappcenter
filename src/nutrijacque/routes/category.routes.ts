import { Router } from 'express';
import { celebrate } from 'celebrate';
import CategoryController from '../app/controllers/CategoryController';
import { IValidationsCategory } from './routesDTO';

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
      celebrate({ body: validations.category }),
      CategoryController.store,
    );
    this.routes.put(
      '/nutricionistajacquelinethedim/categorys/:id',
      celebrate({ body: validations.category, params: validations.paramId }),
      CategoryController.update,
    );
    this.routes.delete(
      '/nutricionistajacquelinethedim/categorys/:id',
      celebrate({ params: validations.paramId }),
      CategoryController.delete,
    );
  }
}
