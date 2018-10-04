module.exports = {
  new: function(req, res) {
    res.render("new_piq");
  }
  //not sure the post route goes here, but rather on the usergallery route
  // create: function(req, res) {
  //     req.send("newpiq", function(err, newPiq){
  //         if(err) {
  //             console.log("error!");
  //         } else {
  //             res.redirect("/usergallery/", {newPiq: newPiq});
  //         }
  //      }
};
