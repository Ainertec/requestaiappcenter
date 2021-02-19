"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordRoutes = void 0;
var ForgotPassword_1 = require("../app/useCases/ForgotPassword");
var ForgotPasswordRoutes = /** @class */ (function () {
    function ForgotPasswordRoutes(routes) {
        this.routes = routes;
    }
    ForgotPasswordRoutes.prototype.getRoutes = function () {
        this.routes.get('/nutricionistajacquelinethedim/forgot/:username', function (request, response) {
            return ForgotPassword_1.forgotPasswordController.show(request, response);
        });
        this.routes.post('/nutricionistajacquelinethedim/forgot', function (request, response) {
            return ForgotPassword_1.forgotPasswordController.store(request, response);
        });
    };
    return ForgotPasswordRoutes;
}());
exports.ForgotPasswordRoutes = ForgotPasswordRoutes;
