import ngo from "../models/NGO.js";

export const getAllNGO = async (req, res) => {
    try {
        const ngo = await ngo.find();
        res.status(200).json(ngo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getNGO = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ngo with id: ${id}`);
    const ngo = await ngo.findById(id);
    res.json(ngo);
}

export const updateNGO = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ngo with id: ${id}`);
    const updatedNGO = { name, email, password, _id: id };
    await ngo.findByIdAndUpdate(id, updatedNGO, { new: true });
    res.json(updatedNGO);
}