import Individual from "../models/individual.js";
import NGO from "../models/NGO.js";
import Corporate from "../models/corporate.js";

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
    } else if (userType == "Corporate") {
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

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    return res
      .status(201)
      .json({
        success: true,
        message: "User registered successfully",
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
