const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");

const UserRouter = require("./routes/user");
const MessageRouter = require("./routes/message");
const InboxChatRouter = require("./routes/inboxChat");

const Message = require("./models/message");

const app = express();

const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
}); // cors configuration
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// routes
app.use("/users", UserRouter);
app.use("/messages", MessageRouter);
app.use("/inbox-chats", InboxChatRouter);

mongoose.connect("mongodb://localhost/whatsapp_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

io.on("connection", socket => {
  // listen for new messages
  socket.on("chatMessage", message => {
    console.log(message);
    // add message to db
    let newMessage = new Message({
      txtMessage: message
    });
    try {
      newMessage.save();
      socket.emit("messageValue", newMessage);
    } catch (err) {
      console.log(err);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.set("useFindAndModify", false);
