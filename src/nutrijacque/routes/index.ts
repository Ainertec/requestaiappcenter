import { Router } from 'express';

import { celebrate } from 'celebrate';
import { CategoryRoutes } from './category.routes';
import { ItemRoutes } from './item.routes';

// validations
import category from '../validations/CategorySchema';
import item from '../validations/ItemSchema';;
import { paramName, paramId } from '../validations/commonSchema';

const routesNutriJacque = Router();

// guests
const categoryRouters = new CategoryRoutes(routesNutriJacque);
categoryRouters.getRoutes({ category, paramName, paramId });


// accommodations
const itemRoutes = new ItemRoutes(routesNutriJacque);
itemRoutes.getRoutes({ paramName, paramId, item });

export default routesNutriJacque;
