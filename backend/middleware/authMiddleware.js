const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

<<<<<<< HEAD
      // Verify token
=======
      // Verify the token
>>>>>>> 0fa2499374a3e385d642ec392788f911ae64ab13
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
<<<<<<< HEAD
    throw new Error("Not authorized, no token");
=======
    throw new Error("Not authorized, No token");
>>>>>>> 0fa2499374a3e385d642ec392788f911ae64ab13
  }
});

module.exports = { protect };
