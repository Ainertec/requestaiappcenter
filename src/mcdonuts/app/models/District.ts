import { Schema } from 'mongoose';
import Connection from '../db/connection';
import { DistrictInterface } from '../../interfaces/base';

const DistrictSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default Connection.model<DistrictInterface>('District', DistrictSchema);
