import express from "express";
import { createEvent, getEvent, getAllEvents, updateEvent } from "../controllers/events.js";

const router = express.Router();

router.post('/create', createEvent);
router.get('/all', getAllEvents);
router.patch('/update/:id', updateEvent);
router.post('/get', getEvent);

export default router;