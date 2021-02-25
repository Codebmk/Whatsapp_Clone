const mongoose = require("mongoose");

const InboxChatSchema = mongoose.Schema({
  members: [],
  messages: [],
  created_at: { type: Date, default: Date.now }
});

const InboxChat = mongoose.model("inbox_chat", InboxChatSchema);

module.exports = InboxChat;
