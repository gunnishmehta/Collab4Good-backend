import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  }],
});

const NGO = mongoose.model('NGO', ngoSchema);

module.exports = NGO;
