/* eslint-disable camelcase */
import { Document, Types } from 'mongoose';

export interface CategoryInterface extends Document {
  name: string;
  items: Item[];
}
export interface Comment {
  name: string;
  mensage: string;
}
export interface Item {
  reference: ItemInterface;
}
export interface ItemInterface extends Document {
  name: string;
  photo: string;
  linkpagament: string;
  description: string;
  price: number;
  linkvideo: string;
  comments: Comment[];
}