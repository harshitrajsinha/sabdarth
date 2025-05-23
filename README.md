# Sabdarth - Word Meaning Finder Chrome Extension

A Chrome extension that helps you to find meanings of English words using the Gemini AI API. The extension provides a clean and intuitive interface to look up word meanings, Hindi translations, synonyms, and usage examples.

## Features

- Quick word lookup with a side panel interface
- Displays multiple aspects of word meanings:
  - English meaning
  - Hindi translation
  - Synonyms
  - Usage examples
- Modern and user-friendly UI
- Real-time search results
- Configurable server URL through config.json

<!-- ## Project Structure

```
sabdarth/
├── images/                     # Extension icons and images
├── server/                     # Server-side code
├── config.json                 # Configuration file for server URL
├── manifest.json               # Chrome extension manifest
├── sidepanel.html             # Side panel UI
├── sidepanel.js               # Side panel functionality
├── popup.html                 # Extension popup UI
├── background.js              # Background script
├── content.js                 # Content script
└── package.json               # Node.js dependencies
``` -->

## Setup Instructions

1. Clone the repository
2. cd into the server directory
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the /server directory with your Gemini API key:
   ```
   GEMINI_KEY=your_api_key_here
   PORT=3000
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. Load the extension in Chrome:
   - Open Chrome and go to chrome://extensions/
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select the extension directory

## Usage

1. Click the extension icon in Chrome's toolbar
2. The side panel will open on the right side of your browser
3. Enter a word in the input field
4. Click "Find Meaning" to get the word's information
5. The results will be displayed with meaning, Hindi translation, synonyms, and usage examples

## Technologies Used

- Chrome Extension API
- Node.js with Express
- Gemini AI API
- HTML5, CSS3, JavaScript
- npm for package management