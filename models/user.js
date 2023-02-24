import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
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
  address: {
    type: String,
    maxlength: 255,
    minlength: 2,
    required: true,
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
  password: {
    type: String,
    minlength: 5,  
    maxlength: 255,
    required: true,
    trim: true
  },
  role: {
    type: String,
    default: "user"
  }
});

userSchema.pre('save', async function(next) {
  if(!this.isModified("password")) return next();
  this.password =  await bcrypt.hash(this.password, 10);
  return next();
});

userSchema.methods.setToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.NEXT_PUBLIC_JWT_TOKEN, { expiresIn: '15h' });
  return token;
};

userSchema.methods.passCheck = async function(pass) {
  const check = await bcrypt.compare(pass, this.password);
  return check;
};

module.exports = mongoose.models.User || mongoose.model('User', userSchema);