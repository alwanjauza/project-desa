const { Op } = require("sequelize");
const { Schedule, User } = require("../models");

// Create a new schedule
exports.createSchedule = async (req, res) => {
  try {
    const { title, description, date, image, authorId } = req.body;
    const schedule = await Schedule.create({
      title,
      description,
      date,
      image,
      authorId,
    });

    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all schedules
exports.getAllSchedules = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows: schedules } = await Schedule.findAndCountAll({
      include: { model: User, as: "Author", attributes: ["id", "name"] },
      limit,
      offset,
    });
    const totalPages = Math.ceil(count / limit);

    res.json({
      schedules,
      pagination: {
        totalItems: count,
        totalPages,
        currentPage: page,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get upcoming schedules
exports.getUpcomingSchedules = async (req, res) => {
  try {
    const now = new Date();
    const upcomingSchedules = await Schedule.findAll({
      where: { date: { [Op.gt]: now } },
      include: { model: User, as: "Author", attributes: ["id", "name"] },
    });

    res.json(upcomingSchedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get today's schedules
exports.getTodaysSchedules = async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const todaysSchedules = await Schedule.findAll({
      where: {
        date: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
      include: { model: User, as: "Author", attributes: ["id", "name"] },
    });

    res.json(todaysSchedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a schedule by ID
exports.getScheduleById = async (req, res) => {
  try {
    const schedule = await Schedule.findByPk(req.params.id, {
      include: { model: User, as: "Author", attributes: ["id", "name"] },
    });

    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a schedule by ID
exports.updateSchedule = async (req, res) => {
  try {
    const { title, description, date, image, authorId } = req.body;
    const [updated] = await Schedule.update(
      { title, description, date, image, authorId },
      { where: { id: req.params.id } }
    );

    if (!updated) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    const updatedSchedule = await Schedule.findByPk(req.params.id);
    res.json(updatedSchedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a schedule by ID
exports.deleteSchedule = async (req, res) => {
  try {
    const deleted = await Schedule.destroy({ where: { id: req.params.id } });

    if (!deleted) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
