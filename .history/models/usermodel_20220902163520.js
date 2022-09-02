const mongoose = require("mongoose");

//nosql

const Usermodel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " name i srequired"],
  },

  city: {
    type: String,
    required: [true, " name i srequired"],
  },

  rollno: {
    type: String,
    required: [true, " name i srequired"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, " name i srequired"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required "],
  },
});
