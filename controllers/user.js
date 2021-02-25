const User = require("../models/user");

// create user
const createUser = async (req, res, next) => {
  // add user details
  const body = req.body;

  const user = new User({
    username: body.username,
    phone_number: body.phone_number,
    statusMessage: body.statusMessage,
    profileImage: body.profileImage,
    is_active: body.is_active
  });

  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); //moongoose methods that returns all users

    res.status(200).json(users);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

// get user details
const getUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ message: err }));
};

// update user details
const updateUser = (req, res) => {
  User.findById(req.params.id).then(user => {
    user.username = req.body.username;
    user.phone_number = req.body.phone_number;
    user.statusMessage = req.body.statusMessage;
    user.profileImage = req.body.profileImage;
    user.is_active = req.body.is_active;

    user
      .save()
      .then(user => res.json("User Updated!"))
      .catch(err => res.status(400).json({ message: err }));
  });
};

// delete user
const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted!"))
    .catch(err => res.status(400).json({ message: err }));
};

module.exports = { createUser, getUser, getAllUsers, updateUser, deleteUser };
