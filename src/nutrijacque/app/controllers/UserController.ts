/* eslint-disable consistent-return */
import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
  public constructor() {
    this.store = this.store.bind(this);
    this.update = this.update.bind(this);
  }

  async index(request: Request, response: Response) {
    const users = await User.find();

    return response.json(users);
  }

  async show(request: Request, response: Response) {
    const { name } = request.params;

    const users = await User.find({
      $or: [
        {
          name: { $regex: new RegExp(name), $options: 'i' },
        },
      ],
    });
    return response.json(users);
  }

  async store(request: Request, responseHttp: Response) {
    const {
      password,
      question,
      response,
      username,
      admin,
    } = request.body;
    const { userId } = request;
    const userAdm = await User.findOne({ _id: userId });

    const user = await User.create({
      password,
      question,
      response,
      username,
      admin: !userId || !userAdm.admin ? false : admin,
    });

    await user.execPopulate();

    return responseHttp.json(user);
  }

  async update(request: Request, responseHttp: Response) {
    const {
      password,
      username,
      admin,
      question,
      response,
    } = request.body;
    const { id } = request.params;
    const { userId } = request;

    const authUser = await User.findOne({ _id: userId });

    const userToUpdate = await User.findOne({ _id: id });

    const user = authUser.admin ? userToUpdate : authUser;

    if (!user) return responseHttp.status(400).json('user does not exist');

    if (password) {
      user.password = password;
    }
    if (question) {
      user.question = question;
    }
    if (response) {
      user.response = response;
    }
    if (admin && user.admin) {
      user.admin = admin;
    }

    await user.save();
    await user.execPopulate();

    return responseHttp.json(user);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await User.deleteOne({ _id: id });

    return response.status(200).send();
  }
}

export default new UserController();

