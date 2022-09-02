const express = require("express");

const mongoose = require("mongoose");

const app = express();

const Testdata = require("./models/testmodel");

//
app.use(express.json());

app.post("/create", async (req, res) => {
  const data = await Testdata.create(req.body);
});

const connectdb = () => {
  return mongoose
    .connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "KsitStudents",
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

const start = async () => {
  try {
    await connectdb().then(() => {
      // connection
      app.listen(5000, () => {
        console.log("server is started at port 5000");
      });
    });
  } catch (error) {
    console.log(error);
  }
};

start();
