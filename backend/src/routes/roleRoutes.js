const express = require("express");
const {
  createRole,
  modifyRole,
  removeRole,
  getRoles,
} = require("../controllers/roleController");
const {
  authMiddleware,
  superAdminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Routes for roles
router.get("/roles", authMiddleware, getRoles); // Get all roles (available to all authenticated users)
router.post("/roles", authMiddleware, superAdminOnly, createRole); // Create a new role (Super Admin only)
router.put("/roles/:id", authMiddleware, superAdminOnly, modifyRole); // Update a role (Super Admin only)
router.delete("/roles/:id", authMiddleware, superAdminOnly, removeRole); // Delete a role (Super Admin only)

module.exports = router;
