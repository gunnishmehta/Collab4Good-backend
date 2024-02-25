import express from "express";
import { corporateRegister, individualRegister, login, ngoRegister,   } from "../controllers/auth.js";

const router = express.Router();

router.post('/login',login);    //checked
router.post('/register/ngo',ngoRegister);   //checked
router.post('/register/individual',individualRegister); //checked
router.post('/register/corporate',corporateRegister);   //checked


export default router;