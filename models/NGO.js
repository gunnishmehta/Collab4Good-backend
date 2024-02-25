import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  missionStatement: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  }],
});

export const NGO = mongoose.model('NGO', ngoSchema);


