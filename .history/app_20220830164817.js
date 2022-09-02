const express = require("express");

const app = express();

//
app.use(express.json());

//http

// get- fetch the data
//post- pass the data
//delete- delete the data
// put/patch - updating the data

//routes

app.get("/", (req, res) => {
  res.send("hello ksit students");
});

const students = ["prajwal", "ashish", "vishal"];

app.get("/student/:student", (req, res) => {
  const student = req.params.student;

  const allow = students.includes(student);

  if (allow) {
    // if it is true
    //empty data 0  ''  undefined nAN  THEN ALL THESE BECMOME FALSE

    res.send(`hELLO Student ${student}`);
  } else {
    res.send(`hELLO Student ${student}  you are no allowed`);
  }
});

// connection

app.listen(5000, () => {
  console.log("server is started at port 5000");
});
