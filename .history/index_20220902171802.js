const express = require("express");

const mongoose = require("mongoose");

const app = express();

const Testdata = require("./models/testmodel");

const Usermodel = require("./models/usermodel");

//
app.use(express.json());

app.post("/create", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    res.send("plese fill all required fields");

    return;
  }

  const data = await Usermodel.create(req.body);

  res.status(200).json({
    msg: "student has been added",
    data: data,
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!password || !email) {
    res.send("plese fill all required fields");
    return;
  }
  // accoun checkk

  const data = await Usermodel.find({
    email: email,
  });

  if (!data) {
    res.send("no account found");
    return;
  }

  // verify password
  const correct = password === data.password;

  if (correct) {
    res.send("your password is incorrect");
    return;
  }
  res.status(200).json({
    msg: "student has been added",
    data: data,
  });
});

app.get("/getallstudents", async (req, res) => {
  const data = await Usermodel.find({});

  res.status(200).json({
    msg: "student data has been fetcheed",
    data: data,
  });
});

app.get("/getastudent/:id", async (req, res) => {
  const id = req.params.id;

  const data = await Usermodel.findById(id);

  res.status(200).json({
    msg: "student data has fetched",
    data: data,
  });
});

app.delete("/deletestudent/:id", async (req, res) => {
  const id = req.params.id;

  const data = await Usermodel.findByIdAndDelete(id);

  res.status(200).json({
    msg: "Student data deleted",
    data: data,
  });
});

app.patch("/updatedata/", async (req, res) => {
  const { id } = req.body;

  const data = await Usermodel.findByIdAndUpdate(id, req.body);

  res.status(200).json({
    msg: "Student data deleted",
    data: data,
  });
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
