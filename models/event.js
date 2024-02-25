import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  ngo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NGO',
    required: true,
  },
  donationTotal: {
    type: Number,
  },
  donationGoal: {
    type: Number,
  },
  donors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Individual',
    }
  ]
});

export const Event = mongoose.model('Event', eventSchema);
