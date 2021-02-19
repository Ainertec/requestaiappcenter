"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
var celebrate_1 = require("celebrate");
var UserController_1 = __importDefault(require("../app/controllers/UserController"));
var Authentication_1 = __importDefault(require("../middlewares/Authentication"));
var Authorization_1 = __importDefault(require("../middlewares/Authorization"));
var UserRoutes = /** @class */ (function () {
    function UserRoutes(routes) {
        this.routes = routes;
    }
    UserRoutes.prototype.getRoutes = function (validations) {
        /*this.routes.get(
          '/nutricionistajacquelinethedim/users',
          Authentication,
          Authorization,
          UserController.index,
        );
        this.routes.get(
          '/nutricionistajacquelinethedim/users/:name',
          Authentication,
          Authorization,
          celebrate({ params: validations.paramName }),
          UserController.show,
        );
        this.routes.post(
          '/nutricionistajacquelinethedim/users',
          UserAuth,
          celebrate({ body: validations.user }),
          UserController.store,
        );*/
        this.routes.put('/nutricionistajacquelinethedim/users/:id', Authentication_1.default, Authorization_1.default, celebrate_1.celebrate({
            body: validations.userUpdate,
            params: validations.paramId,
        }), UserController_1.default.update);
        /*this.routes.delete(
          '/nutricionistajacquelinethedim/users/:id',
          Authentication,
          Authorization,
          celebrate({ params: validations.paramId }),
          UserController.delete,
        );*/
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
