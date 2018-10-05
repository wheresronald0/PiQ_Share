const express = require("express");
const mongoose = require("mongoose");
const request = require("request");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const indexRouter = require("./routes/index.js");
const userRouter = require("./routes/user.js");
const userGalleryRouter = require("./routes/user_gallery.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use("/", indexRouter);
app.use("/", userRouter);
app.use("/", userGalleryRouter);

app.set("view engine", "ejs");

mongoose.connect(
  "mongodb://localhost/PiQ_Share",
  { useNewUrlParser: true }
);

app.listen(4000, () => {
  console.log("PiQ server is rockin!!");
});
