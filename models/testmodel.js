const mongoose = require("mongoose");

const Testdata = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "must provide a  first name"],
    maxlength: [20, "name cannot be more than 20 letters"],
  },
  secondname: {
    type: String,
    default: "kUMAR",

    maxlength: [20, "name cannot be more than 20 letters"],
  },
  city: {
    type: String,
    required: [true, "must provide a city"],
    maxlength: [15, "name cannot be more than 20 letters"],
  },
  rollno: {
    type: Number,
    required: [true, "must provide a roll no "],
    unique: true,
  },
});

module.exports = mongoose.model("Testdata", Testdata);
