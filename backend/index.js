const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Allow only your React app
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow cookies if needed
    maxAge: 86400, // Cache preflight for 24 hours
  }),
);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Node API" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
