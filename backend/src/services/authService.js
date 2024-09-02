const bcrypt = require("bcryptjs");
const prisma = require("../prisma/client");
const { generateToken } = require("../utils/jwt");

const registerUser = async ({ name, email, password, roleId }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      roleId,
    },
  });
};

const deleteUser = async (userId) => {
  return prisma.user.delete({
    where: {
      id: userId,
    },
  });
};

const loginUser = async ({ email, password }) => {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { role: true },
  });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken({ userId: user.id, role: user.role.role });
    return { token, id: user.id, name: user.name, role: user.role.role };
  }
  throw new Error("Invalid credentials");
};

const updateUserBySuperAdmin = async (id, { name }) => {
  return prisma.user.update({
    where: { id },
    data: { name },
    select: { id: true, name: true, role: { select: { role: true } } },
  });
};

// Update user's own name or password
const updateUser = async (
  userId,
  { name, email, oldPassword, newPassword }
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  // Update name and/or email only
  if ((name || email) && !newPassword && !oldPassword) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        ...(name && { name }),
        ...(email && { email }),
      },
      select: { id: true, name: true, email: true },
    });
  }

  // Update password
  if (newPassword && oldPassword) {
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid current password.");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    return prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
        ...(name && { name }),
        ...(email && { email }),
      },
      select: { id: true, name: true, email: true },
    });
  }

  throw new Error("Invalid update parameters.");
};

const getAllUsersService = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const [users, totalCount] = await Promise.all([
    prisma.user.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        name: true,
        email: true,
        role: {
          select: {
            role: true,
          },
        },
      },
    }),
    prisma.user.count(), // Get total count of users
  ]);

  return {
    users,
    totalPages: Math.ceil(totalCount / limit), // Calculate total pages
  };
};

const getUserByIdService = async (userId) => {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: {
        select: {
          role: true,
        },
      },
    },
  });
};

module.exports = {
  registerUser,
  deleteUser,
  loginUser,
  getAllUsersService,
  updateUser,
  updateUserBySuperAdmin,
  getUserByIdService,
};
