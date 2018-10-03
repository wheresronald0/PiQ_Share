const express = require("express");
const mongoose = require("mongoose");
const request = require("request");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const photoRouter = require("./routes/photo.js");
const userRouter = require("./routes/user.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use("/", photoRouter);
app.use("/", userRouter);
app.set("view engine", "ejs");

mongoose.connect(
  "mongodb://localhost/PiQ_Share",
  { useNewUrlParser: true }
);

// app.get("/", (req, res) => {
//   res.send("This is the first get route for PiQ!");
// });

app.listen(4000, () => {
  console.log("PiQ server is rockin!!");
});
