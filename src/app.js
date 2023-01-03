import express from 'express';
import 'dotenv/config';
import _ from 'lodash';
import logger from 'morgan';

import {Server as HttpServer} from 'http';
import {Server as IoServer} from 'socket.io'

import ProductsService from './services/products.service.js';
const ProductsService1 = new ProductsService

import { errorHandler } from './middlewares/errorHandler.js'

const app = express();
const http = new HttpServer(app);
const io = new IoServer(http);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(errorHandler);

app.get("/api/health", (_req, res) => {
    res.status(200).send();
    res.render();
});

app.get("/", async (_req, res, next) => {
    try {
        const products = await ProductsService1.getAll();
        res.render("index", { products });
    } catch (err) {
        next(err);
    }
});

io.on('connection', async (socket) => {
    console.info('Nuevo cliente conectado')

});

export default app;