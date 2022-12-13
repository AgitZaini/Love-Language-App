const authRouter = require("express").Router();
const UserController = require("../controllers/userController");

// authRouter.post("/palindrome", UserController.palindrome);
authRouter.post("/register", UserController.register);
authRouter.post("/login", UserController.login);

module.exports = authRouter;
