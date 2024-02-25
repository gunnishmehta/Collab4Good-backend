import mongoose from 'mongoose';

const individualSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ngosJoined:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NGO'
  }
  // Add more fields as needed
});

export const Individual = mongoose.model('Individual', individualSchema);

