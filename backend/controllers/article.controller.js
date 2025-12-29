import Article from "../models/Article.js";
import mongoose from "mongoose";

// CREATE
export const createArticle = async (req, res) => {
  if (!mongoose.connection.readyState)
    return res.status(503).json({ message: "DB not connected" });

  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
export const getArticles = async (req, res) => {
  if (!mongoose.connection.readyState)
    return res.status(503).json({ message: "DB not connected" });

  try {
    const articles = await Article.find({}).sort({ createdAt: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
export const getArticleById = async (req, res) => {
  if (!mongoose.connection.readyState)
    return res.status(503).json({ message: "DB not connected" });

  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateArticle = async (req, res) => {
  if (!mongoose.connection.readyState)
    return res.status(503).json({ message: "DB not connected" });

  try {
    const updated = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
export const deleteArticle = async (req, res) => {
  if (!mongoose.connection.readyState)
    return res.status(503).json({ message: "DB not connected" });

  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: "Article deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
