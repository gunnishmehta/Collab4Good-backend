import {Event} from '../models/event.js';

export const getAllEvent = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createEvent = async (req, res) => {
    const event = req.body;
    const newEvent = new Event(event);
    try {
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, description, date, location } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);
    const updatedEvent = { title, description, date, location, _id: id };
    await Event.findByIdAndUpdate(id, updatedEvent, { new: true });
    res.json(updatedEvent);
}

export const getEvent = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);
    const event = await Event.findById(id);
    res.json(event);
}