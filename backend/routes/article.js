const express = require("express");
const router = express.Router();
const {
  createArticle,
  getArticles,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");
const authenticate = require("../middlewares/authMiddleware");

router.post("/articles", authenticate, createArticle);
router.get("/articles/:id?", getArticles);
router.put("/articles/:id", authenticate, updateArticle);
router.delete("/articles/:id", authenticate, deleteArticle);

module.exports = router;
