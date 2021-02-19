"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverymansRoutes = void 0;
var celebrate_1 = require("celebrate");
var DeliverymanController_1 = __importDefault(require("../app/controllers/DeliverymanController"));
var DeliverymansRoutes = /** @class */ (function () {
    function DeliverymansRoutes(routes) {
        this.routes = routes;
    }
    DeliverymansRoutes.prototype.getRoutes = function (validations) {
        this.routes.get('/mcdonuts/deliverymans', DeliverymanController_1.default.index);
        this.routes.get('/mcdonuts/deliverymans/hasDelivery', DeliverymanController_1.default.showByDelivery);
        this.routes.get('/mcdonuts/deliverymans/availables', DeliverymanController_1.default.show);
        this.routes.get('/mcdonuts/deliverymans/working_days', DeliverymanController_1.default.showByWorking);
        this.routes.get('/mcdonuts/deliverymans/:name', DeliverymanController_1.default.showByName);
        this.routes.post('/mcdonuts/deliverymans', celebrate_1.celebrate({ body: validations.deliveryman }), DeliverymanController_1.default.store);
        this.routes.put('/mcdonuts/deliverymans/:id', celebrate_1.celebrate({ body: validations.deliveryman, params: validations.paramId }), DeliverymanController_1.default.update);
        this.routes.put('/mcdonuts/deliverymans', DeliverymanController_1.default.reset);
        this.routes.delete('/mcdonuts/deliverymans/:id', celebrate_1.celebrate({ params: validations.paramId }), DeliverymanController_1.default.delete);
    };
    return DeliverymansRoutes;
}());
exports.DeliverymansRoutes = DeliverymansRoutes;
