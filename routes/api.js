import express from 'express';
import auth from './auth.js';
import dashboard from './dashboard.js'
import events from './events.js';
import ngo from './ngo.js';

const router = express.Router();

router.use('/auth', auth);
router.use('/dashboard',dashboard);
router.use('/events', events);
router.use('/ngo', ngo);

export default router;