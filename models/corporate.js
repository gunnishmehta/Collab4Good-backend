import mongoose from 'mongoose';

const corporateSchema = new mongoose.Schema({
  companyName: {
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
  // Add more fields as needed
});

const Corporate = mongoose.model('Corporate', corporateSchema);

module.exports = Corporate;
