const express = require("express");
const {
  register,
  login,
  getAllUsers,
  updateUserBySuperAdminController,
  updateUserController,
  deleteUserById,
  getUserById,
} = require("../controllers/authController");
const {
  authMiddleware,
  superAdminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", authMiddleware, superAdminOnly, getAllUsers);
router.get("/users/:id", authMiddleware, getUserById);
router.put(
  "/users/:id",
  authMiddleware,
  superAdminOnly,
  updateUserBySuperAdminController
);
router.put("/users/profile/:id", authMiddleware, updateUserController);
router.delete("/users/:id", authMiddleware, superAdminOnly, deleteUserById);

module.exports = router;
