"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRoutes = void 0;
var celebrate_1 = require("celebrate");
var ItemController_1 = __importDefault(require("../app/controllers/ItemController"));
var ItemRoutes = /** @class */ (function () {
    function ItemRoutes(routes) {
        this.routes = routes;
    }
    ItemRoutes.prototype.getRoutes = function (validations) {
        this.routes.get('/nutricionistajacquelinethedim/items', ItemController_1.default.index);
        this.routes.get('/nutricionistajacquelinethedim/items:name', celebrate_1.celebrate({ params: validations.paramName }), ItemController_1.default.show);
        this.routes.post('/nutricionistajacquelinethedim/items', celebrate_1.celebrate({ body: validations.item }), ItemController_1.default.store);
        this.routes.put('/nutricionistajacquelinethedim/items/:id', celebrate_1.celebrate({ body: validations.item, params: validations.paramId }), ItemController_1.default.update);
        this.routes.delete('/nutricionistajacquelinethedim/items/:id', celebrate_1.celebrate({ params: validations.paramId }), ItemController_1.default.delete);
    };
    return ItemRoutes;
}());
exports.ItemRoutes = ItemRoutes;