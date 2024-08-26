const bcrypt = require("bcryptjs");
const generateToken = require("../config/jwt");
const { findUserByEmail, createUser } = require("../models/user");

const register = (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res
      .status(400)
      .json({ message: "Masukkan nama, email, dan password!" });
  }

  findUserByEmail(email, (existingUser) => {
    if (existingUser) {
      return res.status(400).json({ message: "Email sudah digunakan!" });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create the new user object
    const newUser = {
      email,
      password: hashedPassword,
      name,
    };

    // Insert the new user into the database
    createUser(newUser, (result) => {
      res.status(201).json({
        message: "User created successfully",
        userId: result.insertId,
      });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Masukkan email dan password!" });
  }

  findUserByEmail(email, (err, user) => {
    if (!user) {
      return res.status(404).json({ message: "Email atau password salah!" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(404).json({ message: "Email atau password salah!" });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
  });
};

module.exports = {
  login,
  register,
};
