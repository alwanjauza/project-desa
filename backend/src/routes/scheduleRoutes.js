// src/routes/scheduleRoutes.js

const express = require("express");
const {
  getSchedules,
  getUpcomingSchedulesHandler,
  getSchedulesForTodayHandler,
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

// Public route to get all schedules with pagination
router.get("/schedules", getSchedules);

// Public route to get upcoming schedules
router.get("/schedules/upcoming", getUpcomingSchedulesHandler);

// Public route to get schedules for today
router.get("/schedules/today", getSchedulesForTodayHandler);

// Protected route to get a schedule by ID
router.get("/schedules/:id", getScheduleByIdHandler);

// Protected route to update a schedule
router.put("/schedules/:id", authMiddleware, updateScheduleHandler);

// Protected route to delete a schedule
router.delete("/schedules/:id", authMiddleware, deleteScheduleHandler);

module.exports = router;
