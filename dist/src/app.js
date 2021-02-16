"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var socket_io_1 = __importDefault(require("socket.io"));
var http_1 = __importDefault(require("http"));
var celebrate_1 = require("celebrate");
var routes_1 = __importDefault(require("./nutrijacque/routes"));
var routes_2 = __importDefault(require("./mcdonuts/routes"));
var app = express_1.default();
var server = new http_1.default.Server(app);
var io = socket_io_1.default(server);
app.use(cors_1.default());
app.use(express_1.default.json());
/*if (!(process.env.NODE_ENV === 'test'))
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
});*/
//importação de rotas de todos os sites
app.use(routes_1.default);
app.use(routes_2.default);
app.use(celebrate_1.errors());
exports.default = server;
