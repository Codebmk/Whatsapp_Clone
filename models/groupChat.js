const mongoose = require("mongoose");

const GroupChatSchema = mongoose.Schema({
  members: [],
  messages: [],
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  description: String,
  admins: [],
  created_at: { type: Date, default: Date.now }
});

const GroupChat = mongoose.model("group_chat", GroupChatSchema);

module.exports = GroupChat;
