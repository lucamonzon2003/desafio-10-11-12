import { Router } from "express";
const router = Router();

import auth from './auth.routes.js';
import client from './client.routes.js';

router.use(client);
router.use('/api/auth', auth);


export default router;