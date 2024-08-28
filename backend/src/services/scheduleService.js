// src/services/scheduleService.js

const prisma = require("../prisma/client");

// Add a new schedule
const addSchedule = async (title, description, date, image, authorId) => {
  if (!authorId) {
    throw new Error("Author ID is required."); // Ensure authorId is provided
  }

  return await prisma.schedule.create({
    data: {
      title,
      description,
      date: new Date(date), // Ensure the date is in the correct format
      image,
      author: {
        connect: { id: authorId }, // Use the provided authorId to connect the schedule to the author
      },
    },
  });
};

// Update schedule by ID
const updateSchedule = async (id, data) => {
  return await prisma.schedule.update({
    where: {
      id: parseInt(id, 10), // Convert the ID to an integer
    },
    data,
  });
};

// Delete schedule by ID
const deleteSchedule = async (id) => {
  return await prisma.schedule.delete({
    where: {
      id: parseInt(id, 10), // Convert the ID to an integer
    },
  });
};

// Get all schedules
const getAllSchedules = async () => {
  return await prisma.schedule.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
};

// Get a schedule by ID
const getScheduleById = async (id) => {
  return await prisma.schedule.findUnique({
    where: {
      id: parseInt(id, 10), // Convert the ID to an integer
    },
    include: {
      author: {
        select: {
          name: true, // Include only the author's name
        },
      },
    },
  });
};

module.exports = {
  addSchedule,
  updateSchedule,
  deleteSchedule,
  getAllSchedules,
  getScheduleById,
};
