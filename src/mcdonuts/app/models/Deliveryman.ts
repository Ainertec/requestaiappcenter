import { Schema } from 'mongoose';
import Connection from '../db/connection';
import { DeliverymanInterface } from '../../interfaces/base';

const DeliverymanSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  },
);

export default Connection.model<DeliverymanInterface>('Deliveryman', DeliverymanSchema);
