import { Router } from 'express';
import { celebrate } from 'celebrate';
import ProductController from '../app/controllers/ProductController';
import { IValidationsProduct } from './routesDTO';
import Authorization from '../middlewares/Authorization';
import Authentication from '../middlewares/Authentication';

export class ProductRoutes {
  constructor(private routes: Router) { }

  getRoutes(validations: IValidationsProduct) {
    this.routes.get('/mcdonuts/products', ProductController.index);
    this.routes.get(
      '/mcdonuts/products/:name',
      celebrate({ params: validations.paramName }),
      ProductController.show,
    );
    this.routes.post(
      '/mcdonuts/products',
      Authentication,
      Authorization,
      celebrate({ body: validations.product }),
      ProductController.store,
    );
    this.routes.put(
      '/mcdonuts/products/:id',
      Authentication,
      Authorization,
      celebrate({ body: validations.product, params: validations.paramId }),
      ProductController.update,
    );
    this.routes.delete(
      '/mcdonuts/products/:id',
      Authentication,
      Authorization,
      celebrate({ params: validations.paramId }),
      ProductController.delete,
    );
  }
}
