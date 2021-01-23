import { Schema, model } from 'mongoose';
import { CategoryInterface } from '../../interfaces/base';
import Item from './Item';

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    items: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true
      }
    ],
  },
  {
    timestamps: true,
  },
);


CategorySchema.post<CategoryInterface>(
  'findOneAndDelete',
  async document => {
    if (document) {
      const itemID = document.items;

      for (const item of itemID) {
        await Item.deleteOne({_id: item});
      } 
    }
  })

export default model<CategoryInterface>('Category', CategorySchema);
