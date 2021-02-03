import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';

import socketio from 'socket.io';
import http from 'http';

import { errors } from 'celebrate';
import mongoose from 'mongoose';
import routesNutriJacque from './nutrijacque/routes';
//import routesMcDonuts from './mcdonuts/routes';


const app = express();
const server = new http.Server(app);
const io = socketio(server);



app.use(cors());
app.use(express.json());
if (!(process.env.NODE_ENV === 'test'))
  mongoose.connect(`${process.env.DB_URL_NUTRIJACQUE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

const connectedUsers = {};

io.on('connection', (socket) => {
  const { userId } = socket.handshake.query;
  connectedUsers[userId] = socket.id;
});

app.use((req: Request, res: Response, next) => {
  req.io = io;
  req.connectedUser = connectedUsers;

  return next();
});



//importação de rotas de todos os sites
app.use(routesNutriJacque);
//app.use(routesMcDonuts);


app.use(errors());
export default server;
