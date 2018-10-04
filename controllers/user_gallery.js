const mongoose = require("mongoose");
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
    // rending the form to create a new to do
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
    // displaying the data for a single to do
  },
  edit: function(req, res) {
    // rendering the form to update an existing to do
  },
  update: function(req, res) {
    // updating a to do in the database
  },
  destroy: function(req, res) {
    // deleting a to do
  }
};
