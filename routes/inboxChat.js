const router = require("express").Router();
const {
  createInboxChat,
  getInboxes,
  getInboxChat,
  deleteInboxChat
} = require("../controllers/inboxChat");

router.post("/", createInboxChat);
router.get("/", getInboxes);
router.get("/", getInboxChat);
router.delete("/:id", deleteInboxChat);

module.exports = router;
