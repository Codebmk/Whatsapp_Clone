const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  username: String,
  phone_number: String
});

const Contact = mongoose.model("contact", ContactSchema);
module.exports = Contact;
