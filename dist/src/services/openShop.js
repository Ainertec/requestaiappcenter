"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop.setOpen = function (open) {
        this.open = open;
    };
    Shop.getOpen = function () {
        return this.open;
    };
    Shop.open = false;
    return Shop;
}());
exports.Shop = Shop;
