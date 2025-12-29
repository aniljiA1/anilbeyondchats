import axios from "axios";

export async function searchGoogle(title) {
  const { data } = await axios.get("https://serpapi.com/search", {
    params: { q: title, api_key: process.env.SERP_API_KEY },
  });

  if (!data.organic_results) return [];
  return data.organic_results
    .filter((r) => r.link.includes("blog") || r.link.includes("article"))
    .slice(0, 2)
    .map((r) => r.link);
}
