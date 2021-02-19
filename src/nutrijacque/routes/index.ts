import { Router } from 'express';

import { celebrate } from 'celebrate';
import { CategoryRoutes } from './category.routes';
import { ItemRoutes } from './item.routes';
import { SessionRoutes } from './session.routes';
import { UserRoutes } from './user.routes';
import { ForgotPasswordRoutes } from './ForgotPassword.routes';

// validations
import category from '../validations/CategorySchema';
import { Item, ItemComment } from '../validations/ItemSchema';
import { paramName, paramId } from '../validations/commonSchema';
import {
  user,
  userUpdate,
} from '../validations/userSchema';

const routesNutriJacque = Router();

// session
const sessionRoutes = new SessionRoutes(routesNutriJacque);
sessionRoutes.getRoutes();

// forgot
const forgotPasswordRoutes = new ForgotPasswordRoutes(routesNutriJacque);
forgotPasswordRoutes.getRoutes();

// Users
const userRoutes = new UserRoutes(routesNutriJacque);
userRoutes.getRoutes({ paramId, paramName, user, userUpdate });

// guests
const categoryRouters = new CategoryRoutes(routesNutriJacque);
categoryRouters.getRoutes({ category, paramName, paramId });

// accommodations
const itemRoutes = new ItemRoutes(routesNutriJacque);
itemRoutes.getRoutes({ paramName, paramId, Item, ItemComment });


export default routesNutriJacque;
