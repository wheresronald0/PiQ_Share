const express = require("express");
const mongoose = require("mongoose");
const request = require("request");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const indexRouter = require("./routes/index.js");
const showPiqRouter = require("./routes/show_piq.js");
const userRouter = require("./routes/user.js");
const userGalleryRouter = require("./routes/user_gallery.js");
const newPiqRouter = require("./routes/new_piq.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use("/", indexRouter);
app.use("/", showPiqRouter);
app.use("/", userRouter);
app.use("/", userGalleryRouter);
app.use("/", newPiqRouter);

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
