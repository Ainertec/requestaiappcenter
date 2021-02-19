import { Router } from 'express';
import { celebrate } from 'celebrate';
import IngredientController from '../app/controllers/IngredientController';
import { IValidationsIngredient } from './routesDTO';

export class IngredientsRoutes {
  constructor(private routes: Router) { }

  getRoutes(validations: IValidationsIngredient) {
    this.routes.get('/mcdonuts/ingredients', IngredientController.index);
    this.routes.get(
      '/mcdonuts/ingredients/:name',
      celebrate({ params: validations.paramName }),
      IngredientController.show,
    );
    this.routes.post(
      '/mcdonuts/ingredients',
      celebrate({ body: validations.ingredient }),
      IngredientController.store,
    );
    this.routes.put(
      '/mcdonuts/ingredients/:id',
      celebrate({ body: validations.ingredient, params: validations.paramId }),
      IngredientController.update,
    );
    this.routes.delete(
      '/mcdonuts/ingredients/:id',
      celebrate({ params: validations.paramId }),
      IngredientController.delete,
    );
  }
}
