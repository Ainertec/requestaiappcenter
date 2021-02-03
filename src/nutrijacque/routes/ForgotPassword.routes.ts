import { Router } from 'express';
import { forgotPasswordController } from '../app/useCases/ForgotPassword';

export class ForgotPasswordRoutes {
  constructor(private routes: Router) { }

  getRoutes() {
    this.routes.get('/nutricionistajacquelinethedim/forgot/:username', (request, response) => {
      return forgotPasswordController.show(request, response);
    });
    this.routes.post('/nutricionistajacquelinethedim/forgot', (request, response) => {
      return forgotPasswordController.store(request, response);
    });
  }
}
