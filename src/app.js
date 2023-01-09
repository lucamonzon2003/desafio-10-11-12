import express from 'express';
import dotenv from 'dotenv'
import _ from 'lodash';
import logger from 'morgan';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import http from 'http';
import {Server as IoServer} from 'socket.io';
import { errorHandler } from './middlewares/errorHandler.js';
import router from './routes/index.routes.js'
dotenv.config();

const app = express();
const server = http.createServer(app)
const io = new IoServer(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// app.use(router)

app.get("/api/health", (_req, res) => {
    res.status(200).send();
});

const {COOKIES_SECRET, MONGO_URI} = process.env

app.use(session({
    secret:COOKIES_SECRET,
    store:MongoStore.create({
        mongoUrl:MONGO_URI,
        ttl: 60,
        stringify: true
    }),
    saveUninitialized: false,
    resave: true
}))

io.on('connection', async (socket) => {
    console.info('Nuevo cliente conectado')
    socket.on('NEW_MESSAGE_CLI', async message => {
        message.fyh = new Date().toLocaleString();
        await messageDb.save(message);
        console.info(message);
        io.sockets.emit('NEW_MESSAGE_SERVER', message);
    });
    socket.on('NEW_PRODUCT_CLI', async product => {
        await productDb.save(product)
        console.info(product);
        io.sockets.emit('NEW_PRODUCT_SERVER', product);
    });
});

app.use(errorHandler);
export default server;