mongoose = require("mongoose");

let piqSchema = mongoose.Schema({
  creator: String,
  date: String,
  location: String,
  story: String
});

module.exports = mongoose.model("Piq", piqSchema);
