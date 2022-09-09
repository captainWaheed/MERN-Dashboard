const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register new user
<<<<<<< HEAD
// @route   POST /api/users
=======
// @route   POST/api/users
>>>>>>> 0fa2499374a3e385d642ec392788f911ae64ab13
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

<<<<<<< HEAD
  // Check if user exists
=======
  //Check if user exists
>>>>>>> 0fa2499374a3e385d642ec392788f911ae64ab13
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

<<<<<<< HEAD
  // Hash password
=======
  // Hash Password
>>>>>>> 0fa2499374a3e385d642ec392788f911ae64ab13
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authenticate a user
<<<<<<< HEAD
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

=======
// @route   POST/api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
>>>>>>> 0fa2499374a3e385d642ec392788f911ae64ab13
  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Get user data
<<<<<<< HEAD
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate JWT
=======
// @route   GET/api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// Generate JWT

>>>>>>> 0fa2499374a3e385d642ec392788f911ae64ab13
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
<<<<<<< HEAD
  loginUser,
  getMe,
=======
  getMe,
  loginUser,
>>>>>>> 0fa2499374a3e385d642ec392788f911ae64ab13
};
