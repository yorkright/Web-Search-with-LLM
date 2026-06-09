import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({apikey: process.env.GROQ_API_KEY});

const prompt = "Tell me current stock price of Google?";

console.log(`\n\x1b[34m\x1b[1m[Querying Groq]:\x1b[0m ${prompt}`);
console.log("\x1b[90mSearching the web and processing reasoning...\x1b[0m");

const response = await groq.chat.completions.create({
  model: "groq/compound",
  messages: [
    {
      role: "user",
      content: prompt
    },
  ]
});

const message = response.choices[0].message;

// 1. Reasoning Section (Yellow)
if (message.reasoning) {
  console.log("\n\x1b[33m\x1b[1m[Reasoning]:\x1b[0m");
  console.log(message.reasoning);
}

// 2. Final Output Section (Green)
console.log("\n\x1b[32m\x1b[1m[Groq Response]:\x1b[0m");
console.log(message.content + "\n");

// 3. Tool/Search metadata (Cyan) - if you want to see if tools were used
if (message.executed_tools?.[0]?.search_results) {
  console.log(`\x1b[36m(Used ${message.executed_tools[0].search_results.length} search sources)\x1b[0m\n`);
}
