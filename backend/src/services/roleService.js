const prisma = require("../prisma/client");

// Fetch all roles from the database
const getAllRoles = async () => {
  return await prisma.role.findMany({
    orderBy: { createdAt: "asc" }, // Optional: Order by creation date
  });
};

// Add a new role
const addRole = async (roleName) => {
  return await prisma.role.create({
    data: { role: roleName },
  });
};

// Update an existing role by ID
const updateRole = async (id, roleName) => {
  return await prisma.role.update({
    where: { id },
    data: { role: roleName },
  });
};

// Delete a role by ID
const deleteRole = async (id) => {
  return await prisma.role.delete({
    where: { id },
  });
};

module.exports = { getAllRoles, addRole, updateRole, deleteRole };
