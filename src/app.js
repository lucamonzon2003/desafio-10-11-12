import express from 'express';
import 'dotenv/config';
import _ from 'lodash';
import logger from 'morgan';

import { errorHandler } from './middlewares/errorHandler.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(errorHandler);

export default app;