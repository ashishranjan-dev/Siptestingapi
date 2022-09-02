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

//

app.get("/score/:score", (req, res) => {
  const score = req.params.score;

  const no = isNaN(score); //   not a number
  // sdadd d    this wiill make it true
  if (no) {
    res.send("Please Enter a Valid Number");
    return;
  }

  if (!no < 0 || !no >= 1000) {
    res.send("Please Enter a  Number b/w 0 - 1000 ");
    return;
  }

  let finalscore = (score * 100) / 1000;

  res.status(200).send(`your final score is ${finalscore}`);
});

// connection

app.post("/newstudent", (req, res) => {
  const { city } = req.body;

  if (!city) {
    res.send("City is Required ");

    return;
  }

  //  name rollno city ....

  res.send(req.body);
});

app.listen(5000, () => {
  console.log("server is started at port 5000");
});
