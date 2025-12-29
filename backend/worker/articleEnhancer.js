import Article from "../models/Article.js";
import { searchGoogle } from "../google/googleSearch.js";
import { scrapeArticle } from "../scraper/scrapeArticle.js";
import { rewriteArticle } from "../llm/rewriteArticle.js";

async function enhanceArticles() {
  const articles = await Article.find({ enhancedContent: null });

  for (let article of articles) {
    const links = await searchGoogle(article.title);
    const ref1 = await scrapeArticle(links[0]);
    const ref2 = await scrapeArticle(links[1]);

    const enhanced = await rewriteArticle(article.content, ref1, ref2);

    article.enhancedContent = enhanced;
    article.references = links;
    await article.save();
  }
}

enhanceArticles();
