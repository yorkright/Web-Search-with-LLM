# Web Search with Groq

A simple Node.js utility that leverages the Groq API to perform web searches and provide AI-generated responses with visible reasoning steps.

## Features

- **Real-time Web Search**: Uses the `groq/compound` model to fetch current information.
- **Reasoning Visibility**: Displays the AI's internal reasoning process in the terminal.
- **Clean Terminal UI**: Uses ANSI escape codes for color-coded output:
  - 🔵 **Blue**: The user query.
  - 🟡 **Yellow**: The AI's reasoning steps.
  - 🟢 **Green**: The final response.
  - ⚪ **Gray/Cyan**: Metadata and search status.

## Prerequisites

- Node.js (v18 or higher recommended for top-level await)
- A Groq API Key.

## Installation

1. Clone or navigate to the project directory.
2. Install the required dependencies:
   ```bash
   npm install groq-sdk dotenv
   ```
3. Create a `.env` file in the root directory and add your API key:
   ```env
   GROQ_API_KEY=your_api_key_here
   ```

## Usage

Run the script using Node.js:

```bash
node Websearch.js
```