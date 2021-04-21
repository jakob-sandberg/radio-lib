const express = require("express");
const session = require("express-session");
const path = require("path");

const channelRoutes = require("./routes/channelRoutes");
const userRoutes = require("./routes/userRoutes");
const port = 3001;

// Server setup
const app = express();

// Make sure the server can read the req.body object
app.use(express.json());

// Express-session setup 
app.use(
  session({
    secret: "The Phantom Menace",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
  })
);


// Routes setup goes underneath here...
app.use("/api/v1/channels", channelRoutes);
app.use("/api/v1/users", userRoutes);

// Serve static files, makes the frontend files "available" to the backend
app.use(express.static(path.join(__dirname, "../build")));

// Starts the server
app.listen(port, (err) => {
  if (err) {
    console.error("The server could not be started...");
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}`);
});
