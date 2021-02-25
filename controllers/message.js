const Message = require("../models/message");

// add message
const createMessage = async (req, res) => {
  const body = req.body;

  const message = new Message({
    txtMessage: body.txtMessage,
    sender: body.sender,
    receiver: body.receiver,
    image_url: body.image_url,
    message_status: body.message_status,
    created_at: body.created_at,
    forwaded: Number(body.forwaded)
  });

  try {
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// get messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();

    res.status(200).json(messages);
  } catch (err) {
    res.status(409).json({ message: err });
  }
};

// get message
const getMessage = async (req, res) => {
  await Message.findById(req.params.id)
    .then(message => res.json(message))
    .catch(err => res.status(404).json({ message: err }));
};

// delete message
const deleteMessage = (req, res) => {
  Message.findByIdAndDelete(req.params.id)
    .then(() => res.json("Message deleted!"))
    .catch(err => res.status(400).json({ message: err }));
};

module.exports = { createMessage, getAllMessages, getMessage, deleteMessage };
