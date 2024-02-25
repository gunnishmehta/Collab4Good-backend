import {Individual} from "../models/individual.js";
import {NGO} from "../models/NGO.js";
import {Corporate} from "../models/corporate.js";

export const login = async (req, res) => {
  const { userType, email, password } = req.body;

  try {
    if (userType == "individual") {
      const individual = await Individual.findOne({
        email: email,
        password: password,
      });
      if (!individual) {
        return res.json({ success: false, message: "User not found" });
      }
      return res.json({ success: true, message: "User found" });
    } else if (userType == "ngo") {
      const ngo = await NGO.findOne({ email: email, password: password });
      if (!ngo) {
        return res.json({ success: false, message: "User not found" });
      }
      return res.json({ success: true, message: "User found" });
    } else if (userType == "corporate") {
      const corporate = await Corporate.findOne({
        email: email,
        password: password,
      });
      if (!corporate) {
        return res.json({ success: false, message: "User not found" });
      }
      return res.json({ success: true, message: "User found" });
    } else {
      return res.json({ success: false, message: "Invalid User type " });
    }
  } catch (err) {
    return res.json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

export const ngoRegister = async (req, res) => {
  const { organizationName, email, password, missionStatement } = req.body;

  try {
    // Check if user already exists
    const existingUser = await NGO.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "NGO already exists" });
    }

    // Create new user
    const newUser = new NGO({ organizationName, email, password, missionStatement });
    await newUser.save();

    return res
      .status(201)
      .json({
        success: true,
        message: "NGO registered successfully",
        user: newUser,
      });
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Something went wrong",
        error: err.message,
      });
  }
};

export const corporateRegister = async (req, res) => {
  const { companyName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await Corporate.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Corporate already exists" });
    }

    // Create new user
    const newUser = new Corporate({ companyName, email, password });
    await newUser.save();

    return res
      .status(201)
      .json({ 
        success: true,
        message: "Corporate registered successfully",
        user: newUser,
      });
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Something went wrong",
        error: err.message,
      });
  }
};

export const individualRegister = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await Individual.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Individual already exists" });
    }

    // Create new user
    const newUser = new Individual({ fullName, email, password });
    await newUser.save();

    return res
      .status(201)
      .json({
        success: true,
        message: "Individual registered successfully",
        user: newUser,
      });
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Something went wrong",
        error: err.message,
      });
  }
};
