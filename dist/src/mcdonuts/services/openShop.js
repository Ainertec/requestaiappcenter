"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
var LocalStorage = require('node-localstorage').LocalStorage, localStorage = new LocalStorage('./scratch');
var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop.setOpen = function (open) {
        this.open = open;
        localStorage.setItem('open', "" + open);
    };
    Shop.getOpen = function () {
        if (this.open == null) {
            this.open = Boolean(localStorage.getItem('open') == 'true');
        }
        return this.open;
    };
    Shop.open = null;
    return Shop;
}());
exports.Shop = Shop;
