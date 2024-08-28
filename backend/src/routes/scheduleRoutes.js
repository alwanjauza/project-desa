// src/routes/scheduleRoutes.js

const express = require("express");
const {
  getSchedules,
  createSchedule,
  updateScheduleHandler,
  deleteScheduleHandler,
  getScheduleByIdHandler,
} = require("../controllers/scheduleController");
const {
  authMiddleware,
  superAdminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Protect the create schedule route with authMiddleware
router.post("/schedules", authMiddleware, createSchedule);

// Public route to get all schedules
router.get("/schedules", getSchedules);

// Protected route to get a schedule by ID
router.get("/schedules/:id", getScheduleByIdHandler);

// Protected route to update a schedule
router.put(
  "/schedules/:id",
  authMiddleware,
  superAdminOnly,
  updateScheduleHandler
);

// Protected route to delete a schedule
router.delete(
  "/schedules/:id",
  authMiddleware,
  superAdminOnly,
  deleteScheduleHandler
);

module.exports = router;
