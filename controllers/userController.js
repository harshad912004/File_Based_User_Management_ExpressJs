// controller/userController.js
const fs = require("fs");
const crypto = require("crypto");

// --------------------------------------------------------------------------------------------------------
// common helper function to read file data
const readUsers = () => {
     return JSON.parse(fs.readFileSync("data/users.json", "utf-8"));
};

// common helper function for writing into file
const writeUsers = (usersData) => {
     fs.writeFileSync("data/users.json", JSON.stringify(usersData, null, 2));
};

// --------------------------------------------------------------------------------------------------------
// GET all users
exports.getUsers = (req, res) => {                             // need to use async keyword for async operation
     try {
          res.status(200).json(readUsers());
     } catch (err) {
          res.status(500).json({ message: "error while reading data from file" });
     }
};

// GET user by ID
exports.getUsersByID = (req, res) => {
     const reqId = req.params.id;
     try {
          const usersData = readUsers();
          const userID = usersData.find(u => u.id === reqId);
          if (!userID) {
               return res.status(404).json({ error: "User not found" });
          }
          res.status(200).json(userID);
     } catch (err) {
          res.status(500).json({ message: "error while writing data into file" });
     }
};

// POST create new user
exports.createUsers = (req, res) => {
     try {
          const usersData = readUsers();
          const emailCheck = usersData.find(u => u.email === req.body.email);
          if (emailCheck) {
               return res.status(409).json({ error: "Email already exist." });
          }
          usersData.push({
               id: crypto.randomBytes(3).toString("hex"),
               name: req.body.name,
               email: req.body.email
          });
          writeUsers(usersData);
          res.status(201).json({ message: "User Created" });
     } catch (err) {
          return res.status(500).json({ message: 'error while creating users.' });
     }
};

// PUT update user by ID
exports.updateUsersByID = (req, res) => {
     const reqId = req.params.id;
     const { name } = req.body;
     try {
          const usersData = readUsers();
          const userID = usersData.find((u) => u.id == reqId);
          if (!userID) {
               return res.status(404).json({ message: 'User not found' });
          }
          userID.name = name;
          // userID.email = email;
          writeUsers(usersData);
          res.status(200).json({ message: 'User Updated.', user: userID });
     } catch (err) {
          return res.status(500).json({ message: 'error while updating users data.' });
     }
};

// DELETE user by ID
exports.deleteUsersByID = (req, res) => {
     const reqId = req.params.id;
     try {
          const usersData = readUsers();
          const userID = usersData.findIndex(u => u.id == reqId);
          if (!userID) {
               return res.status(404).json({ message: 'User not found' });
          }
          const deleteUser = usersData.splice(userID, 1);
          writeUsers(usersData);
          return res.status(200).json({ message: `User ${deleteUser[0]} Deleted` });
     } catch (err) {
          res.status(500).json({ message: 'error while deleting user.' });
     }
};