const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/test", (req, res) => {
    res.json({ message: "app.js is definitely running" });
});
app.use("/api/users", userRoutes);

module.exports = app;