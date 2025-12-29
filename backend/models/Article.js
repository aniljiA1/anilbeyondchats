import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: String,
  content: { type: String, required: true },
  sourceUrl: { type: String, required: true, unique: true },
  enhancedContent: String,
  references: [String],
  createdAt: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", ArticleSchema);

export default Article;
