import { Router } from 'express';
import { celebrate } from 'celebrate';
import ItemController from '../app/controllers/ItemController';
import { IValidationsItem } from './routesDTO';
import Authentication from '../middlewares/Authentication';
import Authorization from '../middlewares/Authorization';

export class ItemRoutes {
  constructor(private routes: Router) { }

  getRoutes(validations: IValidationsItem) {
    this.routes.get('/nutricionistajacquelinethedim/items',ItemController.index);
    this.routes.get(
      '/nutricionistajacquelinethedim/items/:name',
      celebrate({ params: validations.paramName }),
      ItemController.show,
    );
    this.routes.post(
      '/nutricionistajacquelinethedim/items',
      Authentication,
      Authorization,
      celebrate({ body: validations.Item }),
      ItemController.store,
    );
    this.routes.put(
      '/nutricionistajacquelinethedim/items/:id',
      Authentication,
      Authorization,
      celebrate({ body: validations.Item, params: validations.paramId }),
      ItemController.update,
    );
    this.routes.put(
      '/nutricionistajacquelinethedim/itemscomments/:id',
      celebrate({ body: validations.ItemComment, params: validations.paramId }),
      ItemController.updateComment,
    );
    this.routes.delete(
      '/nutricionistajacquelinethedim/items/:id',
      Authentication,
      Authorization,
      celebrate({ params: validations.paramId }),
      ItemController.delete,
    );
  }
}
