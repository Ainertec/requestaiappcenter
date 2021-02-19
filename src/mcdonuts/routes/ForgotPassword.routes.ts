import { Router } from 'express';
import { forgotPasswordController } from '../app/useCases/ForgotPassword';

export class ForgotPasswordRoutes {
  constructor(private routes: Router) { }

  getRoutes() {
    this.routes.get('/mcdonuts/forgot/:username', (request, response) => {
      return forgotPasswordController.show(request, response);
    });
    this.routes.post('/mcdonuts/forgot', (request, response) => {
      return forgotPasswordController.store(request, response);
    });
  }
}
