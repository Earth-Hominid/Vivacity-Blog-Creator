const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: [true, 'Please add your name'],
      minLength: 1,
      maxLength: 50,
    },
    last_name: {
      type: String,
      required: [true, 'Please add your lastname'],
      minLength: 1,
      maxLength: 50,
    },
    alias: {
      type: String,
      required: [true, 'Please provide an alias'],
      minLength: 2,
      maxLength: 25,
    },
    email: {
      type: String,
      required: [true, 'Please add your email'],
      unique: true,
      minLength: 6,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minLength: 8,
      maxLength: 150,
    },
    member: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
