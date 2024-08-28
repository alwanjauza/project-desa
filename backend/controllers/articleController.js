const Article = require("../models/article");

const createArticle = async (req, res) => {
  try {
    const { author, title, description, image } = req.body;
    const newArticle = await Article.createArticle({
      author,
      title,
      description,
      image,
    });
    res
      .status(201)
      .json({ message: "Article created successfully", article: newArticle });
  } catch (error) {
    res.status(500).json({ message: "Error creating article", error });
  }
};

const getArticles = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const article = await Article.findByPk(id);
      if (!article) {
        res.status(404).json({ message: "Article not found" });
      }
      res.json({ message: "Articles retrieved successfully", article });
    } else {
      const articles = await Article.findAll();
      res.json({ message: "Articles retrieved successfully", articles });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving articles", error });
  }
};

const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { author, title, description, image } = req.body;
    const [updated] = await Article.update(
      { author, title, description, image },
      { where: { id } }
    );

    if (updated) {
      const updatedArticle = await Article.findByPk(id);
      res.json({ message: "Article updated successfully", updatedArticle });
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating article", error });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Article.destroy({
      where: { id },
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting article", error });
  }
};

module.exports = {
  createArticle,
  getArticles,
  updateArticle,
  deleteArticle,
};
