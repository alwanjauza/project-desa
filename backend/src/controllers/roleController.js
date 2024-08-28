const {
  getAllRoles,
  addRole,
  updateRole,
  deleteRole,
} = require("../services/roleService");

// Controller for getting all roles
const getRoles = async (req, res) => {
  try {
    const roles = await getAllRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for adding a new role
const createRole = async (req, res) => {
  try {
    const { role } = req.body;
    const newRole = await addRole(role);
    res.status(201).json(newRole);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for updating an existing role
const modifyRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const updatedRole = await updateRole(parseInt(id), role);
    res.json(updatedRole);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for deleting a role
const removeRole = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteRole(parseInt(id));
    res.status(204).send(); // No content response
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getRoles, createRole, modifyRole, removeRole };
