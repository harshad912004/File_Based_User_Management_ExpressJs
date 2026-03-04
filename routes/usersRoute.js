// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUsersByID);
router.post("/", userController.createUsers);
router.put("/:id", userController.updateUsersByID);
router.delete("/:id", userController.deleteUsersByID);

module.exports = router;