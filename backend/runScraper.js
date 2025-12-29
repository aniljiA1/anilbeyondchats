import mongoose from "mongoose";
import dotenv from "dotenv";
import { scrapeNewArticles } from "./scraper/scrapeBeyondChats.js";

dotenv.config();

const MONGODB_URI = process.env.MONGO_URI;

async function main() {
  try {
    await mongoose.connect(MONGODB_URI); // no extra options needed
    console.log("✅ MongoDB connected");

    await scrapeNewArticles();
  } catch (err) {
    console.error("❌ DB Error:", err.message);
  } finally {
    mongoose.connection.close();
  }
}

main();
