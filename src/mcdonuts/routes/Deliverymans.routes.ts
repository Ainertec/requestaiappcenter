import { Router } from 'express';
import { celebrate } from 'celebrate';
import DeliverymanController from '../app/controllers/DeliverymanController';
import { IValidationsDeliveryman } from './routesDTO';

export class DeliverymansRoutes {
  constructor(private routes: Router) { }

  getRoutes(validations: IValidationsDeliveryman) {
    this.routes.get('/mcdonuts/deliverymans', DeliverymanController.index);
    this.routes.get(
      '/mcdonuts/deliverymans/hasDelivery',
      DeliverymanController.showByDelivery,
    );
    this.routes.get('/mcdonuts/deliverymans/availables', DeliverymanController.show);
    this.routes.get(
      '/mcdonuts/deliverymans/working_days',
      DeliverymanController.showByWorking,
    );
    this.routes.get('/mcdonuts/deliverymans/:name', DeliverymanController.showByName);
    this.routes.post(
      '/mcdonuts/deliverymans',
      celebrate({ body: validations.deliveryman }),
      DeliverymanController.store,
    );
    this.routes.put(
      '/mcdonuts/deliverymans/:id',
      celebrate({ body: validations.deliveryman, params: validations.paramId }),
      DeliverymanController.update,
    );
    this.routes.put('/mcdonuts/deliverymans', DeliverymanController.reset);
    this.routes.delete(
      '/mcdonuts/deliverymans/:id',
      celebrate({ params: validations.paramId }),
      DeliverymanController.delete,
    );
  }
}
