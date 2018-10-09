const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const request = require("request");
const methodOverride = require("method-override");
const indexRouter = require("./routes/index.js");
const loginRouter = require("./routes/login.js");
const registerRouter = require("./routes/register.js");
const logoutRouter = require("./routes/logout.js");
const userGalleryRouter = require("./routes/user_gallery.js");
const Pic = require("./models/new_piq.js");
const User = require("./models/user.js");

mongoose.connect(
  "mongodb://localhost/PiQ_Share",
  { useNewUrlParser: true }
);

let app = express();
app.use(
  require("express-session")({
    secret: "Max was the best cat but now hes dead",
    resave: false,
    saveUninitialized: false
  })
);

app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use("/", indexRouter);
app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", logoutRouter);
app.use("/", userGalleryRouter);

app.listen(process.env.PORT);

// app.listen(4000, () => {
//   console.log("PiQ server is rockin!!");
// });
