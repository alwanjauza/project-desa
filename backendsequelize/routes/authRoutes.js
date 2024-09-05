const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getAllUsers,
  updateUserName,
  deleteUser,
  getUserById,
  updateUserDetails,
  changePassword,
} = require("../controllers/authController");
const {
  superAdminOnly,
  authMiddleware,
} = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/users", authMiddleware, superAdminOnly, getAllUsers);
router.get("/users/:id", authMiddleware, superAdminOnly, getUserById);
router.put("/users/:id", authMiddleware, superAdminOnly, updateUserName);
router.delete("/users/:id", authMiddleware, superAdminOnly, deleteUser);
router.put("/users/profile/:id", authMiddleware, updateUserDetails);
router.put("/users/change-password/:id", authMiddleware, changePassword);

module.exports = router;
