const { User, Role } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");

exports.register = async (req, res) => {
  try {
    const { name, email, password, roleId } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      roleId,
    });

    const userWithRole = await User.findOne({
      where: { id: user.id },
      include: { model: Role, as: "Role" },
    });

    res.json({
      name: userWithRole.name,
      userId: userWithRole.id,
      role: userWithRole.Role.role,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
      include: { model: Role, as: "Role" },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.generateToken({
      userId: user.id,
      name: user.name,
      role: user.Role.role,
    });

    res.json({
      token,
      id: user.id,
      name: user.name,
      userId: user.id,
      role: user.Role.role,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows: users } = await User.findAndCountAll({
      attributes: ["id", "name", "email"],
      include: {
        model: Role,
        as: "Role",
        attributes: ["role"],
      },
      limit,
      offset,
    });

    const totalPages = Math.ceil(count / limit);

    const formattedUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.Role.role,
    }));

    res.json({
      users: formattedUsers,
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

exports.updateUserName = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { name } = req.body;

    user.name = name;
    await user.save();

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.Role ? user.Role.role : null, // Handle cases where Role might not be included
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const deleted = await User.destroy({ where: { id: userId } });

    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10);

    const user = await User.findByPk(userId, {
      attributes: ["id", "name", "email"],
      include: {
        model: Role,
        as: "Role",
        attributes: ["role"],
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.Role.role,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserDetails = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, email } = req.body;

    if (!name && !email) {
      return res
        .status(400)
        .json({ error: "At least one field (name or email) must be provided" });
    }

    const [updated] = await User.update(
      { name, email },
      { where: { id: userId } }
    );

    if (updated === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User details updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { oldPassword, newPassword } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Old password is incorrect" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
