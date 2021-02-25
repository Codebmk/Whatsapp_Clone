const {
  createUser,
  getUser,
  getAllUsers,
  deleteUser,
  updateUser
} = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.post("/:id", updateUser);

module.exports = router;
