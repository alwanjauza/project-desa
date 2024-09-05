const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  getUpcomingSchedules,
  getTodaysSchedules,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/scheduleController");

// CRUD routes
router.post("/schedules", authMiddleware, createSchedule);
router.get("/schedules", getAllSchedules);
router.get("/schedules/upcoming", getUpcomingSchedules);
router.get("/schedules/today", getTodaysSchedules);
router.get("/schedules/:id", getScheduleById);
router.put("/schedules/:id", authMiddleware, updateSchedule);
router.delete("/schedules/:id", authMiddleware, deleteSchedule);

module.exports = router;
