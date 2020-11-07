"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop.setOpen = function (open) {
        this.open = open;
        try {
            fs_1.default.writeFile(path_1.default.resolve(__dirname, 'config.txt'), "" + open, { flag: 'w' }, function (err) {
                if (err)
                    console.log(err);
            });
        }
        catch (error) { }
    };
    Shop.getOpen = function () {
        if (this.open == null) {
            try {
                fs_1.default.readFile(path_1.default.resolve(__dirname, 'config.txt'), 'utf-8', function (err, data) {
                    if (err)
                        console.log(err);
                    else {
                        data = JSON.parse(data);
                        this.open = Boolean(data == 'true');
                    }
                });
            }
            catch (error) { }
        }
        return this.open;
    };
    Shop.open = null;
    return Shop;
}());
exports.Shop = Shop;
