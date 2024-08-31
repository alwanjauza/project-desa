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
    data: {
      ...data, // Spread the data object to update the schedule
      date: `${data.date}T00:00:00.000Z`, // Ensure the date is in the correct format
    },
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

// Get all schedules with pagination
const getAllSchedules = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const [schedules, totalCount] = await Promise.all([
    prisma.schedule.findMany({
      skip,
      take: limit,
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    }),
    prisma.schedule.count(), // Get total count of schedules
  ]);

  return {
    schedules,
    totalPages: Math.ceil(totalCount / limit), // Calculate total pages
  };
};

// Get upcoming schedules sorted by date closest to today
const getUpcomingSchedules = async () => {
  return await prisma.schedule.findMany({
    where: {
      date: {
        gte: new Date(), // Only future dates
      },
    },
    orderBy: {
      date: "asc", // Closest dates first
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
};

// Get schedules for today
const getSchedulesForToday = async () => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  return await prisma.schedule.findMany({
    where: {
      date: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
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
  getUpcomingSchedules,
  getSchedulesForToday,
  getScheduleById,
};
