module.exports = {
  index: function(req, res) {
    res.render("user_gallery");
  },
  new: function(req, res) {
    // rending the form to create a new to do
  },
  create: function(req, res) {
    // creating a new to do and saving it to the database
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
