const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/user.js");
const Piq = require("../models/new_piq.js");

module.exports = {
  index: function(req, res) {
    Piq.find({}, (err, allPiqs) => {
      if (err) {
        console.log(err);
      } else {
        res.render("user_gallery", { piqs: allPiqs });
      }
    });
  },
  new: function(req, res) {
    res.render("new_piq");
  },
  create: function(req, res) {
    let creator = req.body.creator;
    let date = req.body.date;
    let location = req.body.location;
    let story = req.body.story;
    let newPiq = {
      creator: creator,
      date: date,
      location: location,
      story: story
    };
    Piq.create(newPiq, function(err, newPiqCreated) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/usergallery");
      }
    });
  },
  show: function(req, res) {
    Piq.findById(req.params.id, (err, foundPiq) => {
      if (err) {
        console.log(err);
      } else {
        res.render("show_piq", { foundPiq: foundPiq });
      }
    });
  },
  edit: function(req, res) {
    Piq.findById(req.params.id, (err, foundPiq) => {
      if (err) {
        console.log(err);
      } else {
        res.render("update_piq", { piq: foundPiq });
      }
    });
  },
  update: function(req, res) {
    Piq.findByIdAndUpdate(req.params.id, req.body.piq, (err, updatePic) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/usergallery/" + req.params.id);
      }
    });
  },

  destroy: function(req, res) {
    //tell db to delete it
    Piq.findByIdAndRemove(req.params.id, (err, deletePic) => {
      if (err) {
        console.log(err);
        res.redirect("/usergallery");
      } else {
        res.redirect("/usergallery");
      }
    });
  }
};
