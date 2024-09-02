const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Expected format: 'Bearer <token>'

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded payload (user data) to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token." });
  }
};

// Middleware to restrict access to Super Admin only
const superAdminOnly = (req, res, next) => {
  console.log("User role:", req.user.role); // Log user's role
  if (req.user.role !== "Super Admin") {
    return res
      .status(403)
      .json({ message: "Access denied. Super Admins only." });
  }
  next();
};

module.exports = { authMiddleware, superAdminOnly };
