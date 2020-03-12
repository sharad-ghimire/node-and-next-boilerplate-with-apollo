let mongoose = require("mongoose");
let validator = require("validator");
let slugGenerator = require("mongoose-slug-generator");

mongoose.plugin(slugGenerator);

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false,
    unique: true,
    lowercase: true
  },
  slug: { type: String, slug: "name", slug_padding_size: 3, unique: true }
});

module.exports = User = mongoose.model("User", userSchema);
