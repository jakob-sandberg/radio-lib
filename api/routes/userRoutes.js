const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");


router.get("/whoami", userController.whoami);
router.post("/login", userController.login);
router.get("/logOut", userController.logOut);
router.post("/register", userController.register);
router.delete("/:id", userController.deleteUserById);

module.exports = router;
