// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUsersByID);
router.post("/createUsers", userController.createUsers);
router.put("/updateUsers/:id", userController.updateUsersByID);
router.delete("/deleteUsers/:id", userController.deleteUsersByID);

module.exports = router;