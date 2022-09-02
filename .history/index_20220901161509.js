const express = require("express");

const mongoose = require("mongoose");

const app = express();

//
app.use(express.json());

const connectdb = () => {
  return mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Ksit Students",
  });
};

// connection
app.listen(5000, () => {
  console.log("server is started at port 5000");
});
