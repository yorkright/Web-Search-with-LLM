//Gemini 2.5 Flash Lite with Web Search Grounding Example
  

import { GoogleGenAI } from "@google/genai";
import 'dotenv/config'; // Load environment variables from .env
import chalk from 'chalk';

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

const groundingTool = {
    googleSearch: {},
};

const config = {
    tools: [groundingTool],
};

try {
    console.log(chalk.blue.bold('\n🔍 Querying Gemini with Web Search...'));
    
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        // contents: "What's the stock price of Apple Inc.?",
            contents: "Tell me stock price of Apple Inc. and provide sources.",
        config,
    });

    console.log(chalk.green.bold('\n--- Response ---'));
    console.log(chalk.white(response.text));

    // Check if there are search grounding sources and display them
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
    if (groundingMetadata?.searchEntryPoint) {
        console.log(chalk.cyan.bold('\n--- Sources & Grounding ---'));
        
        const chunks = groundingMetadata.groundingChunks || [];
        chunks.forEach((chunk, index) => {
            if (chunk.web) {
                console.log(chalk.dim(`[${index + 1}] ${chunk.web.title}`));
                console.log(chalk.blue.underline(`    ${chunk.web.uri}`));
            }
        });
    }
    console.log('\n');
} catch (error) {
    console.error(chalk.red.bold('\n❌ Error:'), error.message);
}