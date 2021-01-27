/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import Item from '../models/Item';

class ItemController {

  async store(request: Request, response: Response) {
    const { name, photo, linkpagament, description, price, linkvideo, comments } = request.body;

    const item = await Item.create({
      name,
      photo,
      linkpagament,
      description,
      price,
      linkvideo,
      comments
    });

    return response.json(item);
  }

  async update(request: Request, response: Response) {
    const { name, photo, linkpagament, description, price, linkvideo, comments } = request.body;
    const { id } = request.params;

    const item = await Item.findOneAndUpdate(
      { _id: id },
      {
        name,
        photo,
        linkpagament,
        description,
        price,
        linkvideo,
        comments
      },
      { new: true },
    );

    return response.json(item);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await Item.findOneAndRemove({ _id: id });

    return response.status(200).send();
  }
}

export default new ItemController();
