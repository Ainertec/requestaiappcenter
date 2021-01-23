/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import Item from '../../validations/ItemSchema';
import Category from '../models/Category';

class CategoryController {
  public constructor() {
    this.store = this.store.bind(this);
    this.update = this.update.bind(this);
  }

  async index(request: Request, response: Response) {
    const categorys = await Category.find({}).populate('Items');
    return response.json(categorys);
  }

  async show(request: Request, response: Response) {
    const { name } = request.params;

    const categorys = await Category.find({
      name: { $regex: new RegExp(name), $options: 'i' },
    }).populate('Items')

    return response.json(categorys);
  }

  async store(request: Request, response: Response) {
    const { name, items } = request.body;
    const category = await Category.create({
      name,
      items,
    });
    await category.populate('Items').execPopulate();
    return response.json(category);
  }

  async update(request: Request, response: Response) {
    const { name, items } = request.body;
    const { id } = request.params;

    const category = await Category.findOneAndUpdate(
      { _id: id },
      {
        name,
        items,
      },
      { new: true },
    );
    if (!category) return response.status(400).json('category not found');

    await category.save();

    await category.populate('items').execPopulate();

    return response.json(category);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await Category.findOneAndDelete({ _id: id });

    return response.status(200).send();
  }
}

export default new CategoryController();
