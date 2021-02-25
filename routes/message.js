const router = require("express").Router();
const {
  createMessage,
  getAllMessages,
  getMessage,
  deleteMessage
} = require("../controllers/message");

router.post("/", createMessage);
router.get("/", getAllMessages);
router.get("/:id", getMessage);
router.delete("/:id", deleteMessage);

module.exports = router;
