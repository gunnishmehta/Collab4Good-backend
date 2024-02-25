import {NGO} from "../models/NGO.js"; // Import the NGO model
import mongoose from "mongoose"; // Import mongoose

export const getAllNGO = async (req, res) => {
    try {
        const ngos = await NGO.find(); // Correct the variable name and use the correct model
        res.status(200).json(ngos); // Return the list of NGOs
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getNGO = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No NGO with id: ${id}`); // Correct the variable name
    try {
        const ngo = await NGO.findById(id); // Correct the function name
        if (!ngo) return res.status(404).send(`No NGO with id: ${id}`);
        res.json(ngo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateNGO = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No NGO with id: ${id}`); // Correct the variable name
    const updatedNGO = { name, email, password, _id: id };
    try {
        const updatedNgo = await NGO.findByIdAndUpdate(id, updatedNGO, { new: true }); // Correct the function name
        res.json(updatedNgo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
