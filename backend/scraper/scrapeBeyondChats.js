import mongoose from "mongoose";
import dotenv from "dotenv";
import axios from "axios";
import * as cheerio from "cheerio";
import Article from "../models/Article.js";

dotenv.config();

const BASE_URL = "https://beyondchats.com";

// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URI, {
  dbName: "beyondchats",
  tls: true,
  tlsAllowInvalidCertificates: true, // dev only
});

console.log("✅ MongoDB connected");

export async function scrapeOldestArticles() {
  console.log("Fetching BeyondChats articles...");

  try {
    const { data } = await axios.get(`${BASE_URL}/blogs/`);
    const $ = cheerio.load(data);

    const articles = $("a[href*='/blogs/']");
    console.log(`Found ${articles.length} articles`);

    for (let i = 0; i < articles.length; i++) {
      const el = articles[i];
      const title = $(el).text().trim() || $(el).find("h2").text().trim();
      let link = $(el).attr("href");
      if (!title || !link) continue;
      if (!link.startsWith("http")) link = `${BASE_URL}${link}`;

      const exists = await Article.findOne({ sourceUrl: link });
      if (exists) continue;

      const articlePage = await axios.get(link);
      const $$ = cheerio.load(articlePage.data);
      const content =
        $$(".blog-content").text() || $$("article").text() || $$("main").text();

      await Article.create({
        title,
        content: content.replace(/\s+/g, " ").trim(),
        sourceUrl: link,
      });

      console.log(`✅ Saved: ${title}`);
    }
    console.log("🎉 Scraping completed!");
  } catch (err) {
    console.error("❌ Scraper error:", err.message);
  }
}

// Run scraper
scrapeOldestArticles();
