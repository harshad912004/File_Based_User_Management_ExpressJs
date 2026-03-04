// app.js
const express = require("express");
const app = express();

// --------------------------------------------------------------------------
// user management using file
const usersRoutes = require("./routes/usersRoute");
app.use("/users", usersRoutes);

host = 'localhost';
port = 3000;
app.listen(port, console.log(`Server runnign at http://${hostname}:${port}`))

https://github.com/harshad912004/File_Based_User_Management_Using_ExpressJs