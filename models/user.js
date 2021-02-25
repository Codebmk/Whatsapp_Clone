const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  phone_number: String,
  statusMessage: String,
  profileImage: String,
  is_active: { type: Boolean, default: false },
  last_seen: Date
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
