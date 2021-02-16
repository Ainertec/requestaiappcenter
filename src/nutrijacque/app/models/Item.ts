/* eslint-disable no-param-reassign */
import { Schema } from 'mongoose';
import Connection from '../db/connection';
import { ItemInterface } from '../../interfaces/base';

const CommentSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  mensage: {
    type: String,
    default: null,
  },
});

const ItemSchema = new Schema<ItemInterface>(
  {
    name:{
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    linkpagament: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    linkvideo: {
      type: String,
      required: true,
    },
    comments: [CommentSchema]
  },
  {
    timestamps: true,
  },
);

export default Connection.model<ItemInterface>('Item', ItemSchema);
