"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRoutes = void 0;
var celebrate_1 = require("celebrate");
var ItemController_1 = __importDefault(require("../app/controllers/ItemController"));
var Authentication_1 = __importDefault(require("../middlewares/Authentication"));
var Authorization_1 = __importDefault(require("../middlewares/Authorization"));
var ItemRoutes = /** @class */ (function () {
    function ItemRoutes(routes) {
        this.routes = routes;
    }
    ItemRoutes.prototype.getRoutes = function (validations) {
        this.routes.get('/nutricionistajacquelinethedim/items', ItemController_1.default.index);
        this.routes.get('/nutricionistajacquelinethedim/items/:name', celebrate_1.celebrate({ params: validations.paramName }), ItemController_1.default.show);
        this.routes.post('/nutricionistajacquelinethedim/items', Authentication_1.default, Authorization_1.default, celebrate_1.celebrate({ body: validations.Item }), ItemController_1.default.store);
        this.routes.put('/nutricionistajacquelinethedim/items/:id', Authentication_1.default, Authorization_1.default, celebrate_1.celebrate({ body: validations.Item, params: validations.paramId }), ItemController_1.default.update);
        this.routes.put('/nutricionistajacquelinethedim/itemscomments/:id', celebrate_1.celebrate({ body: validations.ItemComment, params: validations.paramId }), ItemController_1.default.updateComment);
        this.routes.delete('/nutricionistajacquelinethedim/items/:id', Authentication_1.default, Authorization_1.default, celebrate_1.celebrate({ params: validations.paramId }), ItemController_1.default.delete);
    };
    return ItemRoutes;
}());
exports.ItemRoutes = ItemRoutes;
