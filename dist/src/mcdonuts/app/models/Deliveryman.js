"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var connection_1 = __importDefault(require("../db/connection"));
var DeliverymanSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    working_day: {
        type: Boolean,
        // required: true,
        default: false,
    },
    available: {
        type: Boolean,
        // required: true,
        default: false,
    },
    hasDelivery: {
        type: Boolean,
        // required: true,
        default: false,
    },
    phone: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = connection_1.default.model('Deliveryman', DeliverymanSchema);
