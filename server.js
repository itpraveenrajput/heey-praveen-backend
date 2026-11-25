
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "HEEY PRAVEEN Backend is Running!"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    project: "HEEY PRAVEEN"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
