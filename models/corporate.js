import mongoose, {Schema} from 'mongoose'

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
  donatedTo: [
    {
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
      amount: {
        type: Number,
      }
    }
  ]
});

export const Corporate = mongoose.model('Corporate', corporateSchema)