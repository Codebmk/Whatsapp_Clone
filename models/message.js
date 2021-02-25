const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    txtMessage: String,
    replies: { type: [String], default: [] },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    image_url: [String],
    message_status: { type: Boolean, default: false },
    created_at: Date,
    forwaded: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

const Message = mongoose.model("message", MessageSchema);
module.exports = Message;
