require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");
const imagekitRoutes = require("./routes/imagekitRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const sequelize = require("./config/database");

app.use(cors());
app.use(express.json());

// API routes
app.use("/api", authRoutes);
app.use("/api", imagekitRoutes);
app.use("/api", scheduleRoutes);

// Test the database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
