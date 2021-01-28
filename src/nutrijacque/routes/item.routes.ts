import { Router } from 'express';
import { celebrate } from 'celebrate';
import ItemController from '../app/controllers/ItemController';
import { IValidationsItem } from './routesDTO';

export class ItemRoutes {
  constructor(private routes: Router) { }

  getRoutes(validations: IValidationsItem) {
    this.routes.get('/nutricionistajacquelinethedim/items', ItemController.index);
    this.routes.get(
      '/nutricionistajacquelinethedim/items:name',
      celebrate({ params: validations.paramName }),
      ItemController.show,
    );
    this.routes.post(
      '/nutricionistajacquelinethedim/items',
      celebrate({ body: validations.item }),
      ItemController.store,
    );
    this.routes.put(
      '/nutricionistajacquelinethedim/items/:id',
      celebrate({ body: validations.item, params: validations.paramId }),
      ItemController.update,
    );
    this.routes.delete(
      '/nutricionistajacquelinethedim/items/:id',
      celebrate({ params: validations.paramId }),
      ItemController.delete,
    );
  }
}
