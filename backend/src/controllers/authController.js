const { registerUser, loginUser } = require("../services/authService");

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
    res.status(401).json({ error: "Invalid credentials" });
  }
};

module.exports = { register, login };
