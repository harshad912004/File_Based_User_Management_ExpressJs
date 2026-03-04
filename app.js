// app.js
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --------------------------------------------------------------------------
// user management using file
const usersRoutes = require("./routes/usersRoute");
app.use("/users", usersRoutes);

hostname = 'localhost';
port = 3000;
app.listen(port, console.log(`Server runnign at http://${hostname}:${port}`));