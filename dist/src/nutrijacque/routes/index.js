"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var category_routes_1 = require("./category.routes");
var item_routes_1 = require("./item.routes");
// validations
var CategorySchema_1 = __importDefault(require("../validations/CategorySchema"));
var ItemSchema_1 = require("../validations/ItemSchema");
;
var commonSchema_1 = require("../validations/commonSchema");
var routesNutriJacque = express_1.Router();
// guests
var categoryRouters = new category_routes_1.CategoryRoutes(routesNutriJacque);
categoryRouters.getRoutes({ category: CategorySchema_1.default, paramName: commonSchema_1.paramName, paramId: commonSchema_1.paramId });
// accommodations
var itemRoutes = new item_routes_1.ItemRoutes(routesNutriJacque);
itemRoutes.getRoutes({ paramName: commonSchema_1.paramName, paramId: commonSchema_1.paramId, Item: ItemSchema_1.Item, ItemComment: ItemSchema_1.ItemComment });
exports.default = routesNutriJacque;
