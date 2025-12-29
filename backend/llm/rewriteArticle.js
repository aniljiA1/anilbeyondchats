import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function rewriteArticle(original, ref1, ref2) {
  const prompt = `
Rewrite the article below by improving structure, formatting,
SEO optimization, and clarity. Use references style.

Original:
${original}

Reference 1:
${ref1}

Reference 2:
${ref2}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}
