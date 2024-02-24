import express from "express";
import { getAllNGO, getNGO, updateNGO } from "../controllers/ngo.js";

const router = express.Router();

router.get('/all', getAllNGO);
router.patch('/update/:id', updateNGO);
router.post('/get', getNGO);

export default router;