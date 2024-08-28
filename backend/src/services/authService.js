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

module.exports = { registerUser, loginUser };
