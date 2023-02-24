import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxlength: 255,
    minlength: 2,
    required: true,
    lowercase: true,
    trim: true
  },
  lastName: {
    type: String,
    maxlength: 255,
    minlength: 2,
    required: true,
    lowercase: true,
    trim: true
  },
  companyName: {
    type: String,
    maxlength: 255,
    minlength: 2,
    lowercase: true,
    trim: true
  },
  address: {
    type: String,
    maxlength: 255,
    minlength: 2,
    required: true,
    lowercase: true,
    trim: true
  },
  address2: {
    type: String,
    maxlength: 255,
    minlength: 2,
    lowercase: true,
    trim: true
  },
  country: {
    type: String,
    maxlength: 255,
    minlength: 2,
    required: true,
    lowercase: true,
    trim: true
  },
  city: {
    type: String,
    maxlength: 255,
    minlength: 2,
    required: true,
    lowercase: true,
    trim: true
  },
  postCode: {
    type: String,
    maxlength: 255,
    minlength: 2,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    minlength: 5,  
    maxlength: 255,
    required: true,
    trim: true
  },
  email: {
    type: String,
    maxlength: 255,
    minlength: 5,
    required: true,
    lowercase: true,
    trim: true
  },
  notes: {
    type: String,
    maxlength: 555,
    minlength: 2,
    lowercase: true,
    trim: true
  },
  totalPrice: {
    type: Number
  },
  sign: {
    type: String,
    maxlength: 25,
    minlength: 2,
    trim: true
  },
  cartItems: [],
  creditCardNumber: {
    type: String,
    maxlength: 25,
    minlength: 2,
    lowercase: true,
    trim: true
  },  
  cvv: {
    type: String,
    maxlength: 25,
    minlength: 2,
    lowercase: true,
    trim: true
  },
  exDate: {
    type: String,
    maxlength: 25,
    minlength: 2,
    lowercase: true,
    trim: true
  },
  type: {
    type: String,
    maxlength: 25,
    minlength: 2,
    required: true,
    lowercase: true,
    trim: true
  }
});

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);