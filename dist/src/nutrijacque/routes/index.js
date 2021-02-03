"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var category_routes_1 = require("./category.routes");
var item_routes_1 = require("./item.routes");
var session_routes_1 = require("./session.routes");
var user_routes_1 = require("./user.routes");
// validations
var CategorySchema_1 = __importDefault(require("../validations/CategorySchema"));
var ItemSchema_1 = require("../validations/ItemSchema");
var commonSchema_1 = require("../validations/commonSchema");
var userSchema_1 = require("../validations/userSchema");
var routesNutriJacque = express_1.Router();
// session
var sessionRoutes = new session_routes_1.SessionRoutes(routesNutriJacque);
sessionRoutes.getRoutes();
// Users
var userRoutes = new user_routes_1.UserRoutes(routesNutriJacque);
userRoutes.getRoutes({ paramId: commonSchema_1.paramId, paramName: commonSchema_1.paramName, user: userSchema_1.user, userUpdate: userSchema_1.userUpdate });
// guests
var categoryRouters = new category_routes_1.CategoryRoutes(routesNutriJacque);
categoryRouters.getRoutes({ category: CategorySchema_1.default, paramName: commonSchema_1.paramName, paramId: commonSchema_1.paramId });
// accommodations
var itemRoutes = new item_routes_1.ItemRoutes(routesNutriJacque);
itemRoutes.getRoutes({ paramName: commonSchema_1.paramName, paramId: commonSchema_1.paramId, Item: ItemSchema_1.Item, ItemComment: ItemSchema_1.ItemComment });
exports.default = routesNutriJacque;
