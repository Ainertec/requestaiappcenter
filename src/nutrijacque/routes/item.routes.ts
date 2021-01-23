import { Router } from 'express';
import { celebrate } from 'celebrate';
import ItemController from '../app/controllers/ItemController';
import { IValidationsItem } from './routesDTO';

export class ItemRoutes {
  constructor(private routes: Router) { }

  getRoutes(validations: IValidationsItem) {
    this.routes.post(
      '/nutricionistajaquelinethedim/items',
      celebrate({ body: validations.item }),
      ItemController.store,
    );
    this.routes.put(
      '/nutricionistajaquelinethedim/items/:id',
      celebrate({ body: validations.item, params: validations.paramId }),
      ItemController.update,
    );
    this.routes.delete(
      '/nutricionistajaquelinethedim/items/:id',
      celebrate({ params: validations.paramId }),
      ItemController.delete,
    );
  }
}
