const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const roleRoutes = require("./routes/roleRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const uploadRoutes = require("./routes/imagekitRoutes");

const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", roleRoutes);
app.use("/api", scheduleRoutes);
app.use("/api", uploadRoutes);

module.exports = app;
