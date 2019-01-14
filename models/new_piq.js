mongoose = require("mongoose");

let piqSchema = mongoose.Schema({
  creator: String,
  date: Date,
  location: String,
  story: String
});

module.exports = mongoose.model("Piq", piqSchema);
