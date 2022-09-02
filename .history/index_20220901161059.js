const express = require("express");

const app = express();

//
app.use(express.json());

// connection
app.listen(5000, () => {
  console.log("server is started at port 5000");
});
