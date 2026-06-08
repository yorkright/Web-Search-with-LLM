# Web Search with AI (Gemini 2.5 Flash Lite)

This project demonstrates how to use the Google Gemini 2.5 Flash Lite model with **Web Search Grounding** to provide accurate, real-time information directly from the web, complete with source citations.

## 🚀 Features

- **Real-time Knowledge:** Uses Google Search grounding to answer queries about current events (e.g., stock prices).
- **Verifiable Sources:** Automatically extracts and displays the web URIs used to ground the model's response.
- **Lightweight & Fast:** Utilizes the `gemini-2.5-flash-lite` model for high-speed performance.
- **User-Friendly UI:** Provides a clean, color-coded terminal interface using `chalk`.

## 🛠️ Prerequisites

- Node.js (v18 or higher recommended)
- A Google Gemini API Key. You can get one from the Google AI Studio.

## 📦 Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd "Web search with Groq"
   ```

2. Install the dependencies:
   ```bash
   npm install @google/genai dotenv chalk
   ```

## ⚙️ Configuration

Create a `.env` file in the root directory and add your Google API key:

```env
GOOGLE_API_KEY=your_actual_api_key_here
```

## 🖥️ Usage

Run the application using Node.js:

```bash
node Websearch.js
```

### Example Input
The default query is configured to ask:
> *"Tell me stock price of Apple Inc. and provide sources."*

### Output
The script will print the AI-generated response in green, followed by a list of **Sources & Grounding** links used to verify the information.

## 📝 License
Apache-2.0