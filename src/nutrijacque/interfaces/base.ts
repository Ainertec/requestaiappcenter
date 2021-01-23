/* eslint-disable camelcase */
import { Document, Types } from 'mongoose';

export interface CategoryInterface extends Document {
  name: string;
  items: Item[];
}
export interface Comment {
  name: String;
  mensage: String;
}
export interface Item {
  reference: ItemInterface;
}
export interface ItemInterface extends Document {
  photo: String;
  linkpagament: String;
  description: String;
  price: Number;
  linkvideo: String;
  comments: Comment[];
}