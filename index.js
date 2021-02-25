const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRouter = require("./routes/user");
const MessageRouter = require("./routes/message");
const InboxChatRouter = require("./routes/inboxChat");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routes
app.use("/users", UserRouter);
app.use("/messages", MessageRouter);
app.use("/inbox-chats", InboxChatRouter);

mongoose.connect("mongodb://localhost/whatsapp_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose.set("useFindAndModify", false);
