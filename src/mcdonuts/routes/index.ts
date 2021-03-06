import { Router } from 'express';

import { celebrate } from 'celebrate';
import { ProductRoutes } from './Products.routes';
import { UserRoutes } from './Users.routes';
import { IngredientsRoutes } from './Ingredients.routes';
import { DeliverymansRoutes } from './Deliverymans.routes';
import { DistrictsRoutes } from './Districts.routes';
import { OrdersRoutes } from './Orders.routes';

// validations
import product from '../validations/productSchema';
import ingredient from '../validations/ingredientSchema';
import deliveryman from '../validations/deliverymanSchema';
import report from '../validations/reportSchema';
import printer from '../validations/printerSchema';
import district from '../validations/districtSchema';
import serial from '../validations/serialSchema';
import {
  order,
  orderUpdate,
  paramDeliveryman,
  paramIdentification,
} from '../validations/orderSchema';
import { client, clientUpdate } from '../validations/clientSchema';
import { paramName, paramId } from '../validations/commonSchema';
import { ReportsRoutes } from './Reports.routes';
import { PrintersRoutes } from './Printers.routes';
import SerialController from '../app/controllers/SerialController';
import { SessionRoutes } from './Session.routes';
import { ForgotPasswordRoutes } from './ForgotPassword.routes';
import Authentication from '../middlewares/Authentication';
import Authorization from '../middlewares/Authorization';
import { ShopController } from '../app/controllers/ShopController';

const routesMcDonuts = Router();

const shopController = new ShopController();
routesMcDonuts.post('/mcdonuts/shop', Authentication, shopController.store);
routesMcDonuts.get('/mcdonuts/shop', shopController.index);


// session
const sessionRoutes = new SessionRoutes(routesMcDonuts);
sessionRoutes.getRoutes();
// forgot
const forgotPasswordRoutes = new ForgotPasswordRoutes(routesMcDonuts);
forgotPasswordRoutes.getRoutes();

// users
const userRoutes = new UserRoutes(routesMcDonuts);
userRoutes.getRoutes({ paramName, paramId, client, clientUpdate });

// products
const productRouters = new ProductRoutes(routesMcDonuts);
productRouters.getRoutes({ product, paramName, paramId });

// districtsRoutes
const districtRoutes = new DistrictsRoutes(routesMcDonuts);
districtRoutes.getRoutes({ paramName, paramId, district });

routesMcDonuts.use(Authentication);

// orders
const orderRoutes = new OrdersRoutes(routesMcDonuts);
orderRoutes.getRoutes({
  order,
  orderUpdate,
  paramDeliveryman,
  paramIdentification,
  paramId,
});

routesMcDonuts.use(Authorization);

// deliverymans
const deliverymanRoutes = new DeliverymansRoutes(routesMcDonuts);
deliverymanRoutes.getRoutes({ paramName, paramId, deliveryman });

// ingredients
const ingredientRoutes = new IngredientsRoutes(routesMcDonuts);
ingredientRoutes.getRoutes({ paramName, paramId, ingredient });

// reports
const reportRoutes = new ReportsRoutes(routesMcDonuts);
reportRoutes.getRoutes(report);

// printers
const printersRoutes = new PrintersRoutes(routesMcDonuts);
printersRoutes.getRoutes({ printer });

// serial

routesMcDonuts.get(
  '/mcdonuts/serial_false',
  celebrate({ query: serial }),
  SerialController.exit,
);


export default routesMcDonuts;
