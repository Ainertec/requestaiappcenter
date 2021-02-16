"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
//if (!(process.env.NODE_ENV === 'test'))
var Connection = mongoose_1.default.createConnection("" + process.env.DB_URL_MCDONUTS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
exports.default = Connection;
