// src/controllers/scheduleController.js

const {
  addSchedule,
  updateSchedule,
  deleteSchedule,
  getAllSchedules,
  getUpcomingSchedules,
  getSchedulesForToday,
  getScheduleById,
} = require("../services/scheduleService");

// Get all schedules with pagination
const getSchedules = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { schedules, totalPages } = await getAllSchedules(page, limit);

    res.status(200).json({
      schedules,
      totalPages,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get upcoming schedules
const getUpcomingSchedulesHandler = async (req, res) => {
  try {
    const schedules = await getUpcomingSchedules();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get schedules for today
const getSchedulesForTodayHandler = async (req, res) => {
  try {
    const schedules = await getSchedulesForToday();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create a new schedule
const createSchedule = async (req, res) => {
  try {
    const { title, description, date, image, authorId } = req.body;

    if (!authorId) {
      return res.status(400).json({ error: "Author ID is required." });
    }

    const newSchedule = await addSchedule(
      title,
      description,
      date,
      image,
      authorId
    );
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a schedule
const updateScheduleHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSchedule = await updateSchedule(id, req.body);
    res.status(200).json(updatedSchedule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a schedule
const deleteScheduleHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteSchedule(id);
    res.status(204).json({ message: "Schedule deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a schedule by ID
const getScheduleByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await getScheduleById(id);
    if (!schedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json(schedule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getSchedules,
  getUpcomingSchedulesHandler,
  getSchedulesForTodayHandler,
  createSchedule,
  updateScheduleHandler,
  deleteScheduleHandler,
  getScheduleByIdHandler,
};
