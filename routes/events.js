import express from "express";
import { createEvent, getEvent, getAllEvent, updateEvent } from "../controllers/events.js";

const router = express.Router();

router.post('/create', createEvent);
router.get('/all', getAllEvent);
router.patch('/update/:id', updateEvent);
router.post('/get', getEvent);

export default router;