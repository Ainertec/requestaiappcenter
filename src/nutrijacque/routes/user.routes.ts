import { Router } from 'express';
import { celebrate } from 'celebrate';
import UserController from '../app/controllers/UserController';
import { IValidationsUser } from './routesDTO';
import UserAuth from '../middlewares/UserAuth';
import Authentication from '../middlewares/Authentication';
import Authorization from '../middlewares/Authorization';

export class UserRoutes {
  constructor(private routes: Router) { }

  getRoutes(validations: IValidationsUser) {
    /*this.routes.get(
      '/nutricionistajacquelinethedim/users',
      Authentication,
      Authorization,
      UserController.index,
    );
    this.routes.get(
      '/nutricionistajacquelinethedim/users/:name',
      Authentication,
      Authorization,
      celebrate({ params: validations.paramName }),
      UserController.show,
    );
    this.routes.post(
      '/nutricionistajacquelinethedim/users',
      UserAuth,
      celebrate({ body: validations.user }),
      UserController.store,
    );*/
    this.routes.put(
      '/nutricionistajacquelinethedim/users/:id',
      Authentication,
      Authorization,
      celebrate({
        body: validations.userUpdate,
        params: validations.paramId,
      }),
      UserController.update,
    );
    /*this.routes.delete(
      '/nutricionistajacquelinethedim/users/:id',
      Authentication,
      Authorization,
      celebrate({ params: validations.paramId }),
      UserController.delete,
    );*/
  }
}
