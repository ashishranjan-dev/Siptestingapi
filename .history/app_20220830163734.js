const express = require("express");

const app = express();

//
app.use(express.json());

//http

// get- fetch the data
//post- pass the data
//delete- delete the data
// put/patch - updating the data

// connection

app.listen(5000, () => {
  console.log("server is started at port 5000");
});
