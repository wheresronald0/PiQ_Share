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
    // Piq.findByIdAndUpdate(
    //   req.params.id,
    //   req.body.newPiqData,
    //   (err, updatePic) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       redirect("/usergallery/" + req.params.id);
    //     }
    //   }
    // );
  },

  destroy: function(req, res) {
    // deleting a to do
  }
};
