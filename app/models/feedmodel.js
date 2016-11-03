var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var feedSchema = new Schema({
  title: String,
  content: String,
  created: {
    type: String
  }
});

module.exports = mongoose.model("feeds", feedSchema);
