const InboxChat = require("../models/inboxChat");

// create new inbox
const createInboxChat = async (req, res) => {
  const body = req.body;
  const inbox_chat = new InboxChat(body);

  try {
    await inbox_chat.save();
    res.status(201).json(inbox_chat);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// get inboxes
const getInboxes = async (req, res) => {
  try {
    const inboxes = await InboxChat.find();

    res.status(200).json(inboxes);
  } catch (err) {
    res.status(409).json({ message: err });
  }
};

// get inbox
const getInboxChat = (req, res) => {
  InboxChat.findById(req.params.id)
    .then(inbox_chat => res.json(inbox_chat))
    .catch(err => res.status(404).json({ message: err }));
};

// delete inbox
const deleteInboxChat = (req, res) => {
  InboxChat.findByIdAndDelete(req.params.id)
    .then(inbox_chat => res.json("Inbox deleted!"))
    .catch(err => res.status(400).json({ message: err }));
};

module.exports = {
  createInboxChat,
  getInboxes,
  getInboxChat,
  deleteInboxChat
};
