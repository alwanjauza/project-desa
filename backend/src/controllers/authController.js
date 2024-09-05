const {
  registerUser,
  loginUser,
  getAllUsersService,
  updateUserBySuperAdmin,
  updateUser,
  deleteUser,
  getUserByIdService,
} = require("../services/authService");

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "User already exists or invalid role" });
  }
};

const login = async (req, res) => {
  try {
    const { token, id, name, role } = await loginUser(req.body);
    res.json({ token, id, name, role });
  } catch (error) {
    res.status(401).json({ error: error });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params; // Get user ID from the URL parameter
    await deleteUser(parseInt(id, 10)); // Convert ID to integer
    res.json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user." });
  }
};

// Controller to update a user by Super Admin
const updateUserBySuperAdminController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updatedUser = await updateUserBySuperAdmin(parseInt(id), { name });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to update user's own profile
const updateUserController = async (req, res) => {
  try {
    const userId = req.user.userId; // Get user ID from middleware
    const { name, email, oldPassword, newPassword } = req.body;

    const updatedUser = await updateUser(userId, {
      name,
      email,
      oldPassword,
      newPassword,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page if not provided

    const { users, totalPages } = await getAllUsersService(page, limit);
    res.json({ users, totalPages });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(parseInt(id, 10)); // Convert ID to integer

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

module.exports = {
  register,
  login,
  deleteUserById,
  getAllUsers,
  updateUserBySuperAdminController,
  updateUserController,
  getUserById,
};
