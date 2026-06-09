import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();


const ai = new GoogleGenAI({apikey: process.env.GOOGLE_API_KEY});

const groundingTool = {
  googleSearch: {},
};

const config = {
  tools: [groundingTool],
};

const prompt = "Tell me current stock price of Google?";
console.log(`\n\x1b[34m\x1b[1m[Querying]:\x1b[0m ${prompt}`);
console.log("\x1b[90mSearching the web for the latest information...\x1b[0m");

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash-lite",
  contents: prompt,
  config,
});

console.log("\n\x1b[32m\x1b[1m[Gemini Response]:\x1b[0m");
console.log(response.text + "\n");