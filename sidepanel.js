document.getElementById("submitButton").addEventListener("click", async () => {
  const word = document.getElementById("wordInput").value.trim();
  if (!word) {
    alert("Please enter a word");
    return;
  }

  // Show loading state
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
        <div class="word-info">
            <h3>Searching...</h3>
            <p style="color: #666;">Please wait while we fetch the word meaning...</p>
        </div>
    `;

  try {
    // Fetch server URL from config.json
    let configResponse = await fetch(chrome.runtime.getURL("config.json"));
    if (!configResponse.ok) {
      throw new Error("Failed to load configuration");
    }
    const config = await configResponse.json();
    const serverUrl = config.SERVER_URL;

    // Make API call
    const apiResponse = await fetch(`${serverUrl}/meaning`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ word }),
    });

    if (!apiResponse.ok) {
      throw new Error("Failed to fetch word meaning");
    }

    const data = await apiResponse.json();
    displayResult(data);
  } catch (error) {
    console.error("Error:", error);
    displayError("Failed to fetch word meaning. Please try again.");
  }
});

function displayResult(data) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
        <div class="word-info">
            <h3>Meaning of "${data.word}"</h3>
            <p>${data.meaning || "Meaning not found"}</p>
        </div>
        <div class="word-info">
            <h3>Pronunciation</h3>
            <p>${data.pronunciation || "Pronunciation not found"}</p>
        </div>
        <div class="word-info">
            <h3>Hindi Meaning</h3>
            <p>${data.hindiMeaning || "Hindi meaning not found"}</p>
        </div>
        <div class="word-info">
            <h3>Synonyms</h3>
            <div class="synonyms">
                ${
                  data.synonyms && data.synonyms.length > 0
                    ? data.synonyms
                        .map((syn) => `<span class="synonym">${syn}</span>`)
                        .join("")
                    : "No synonyms found"
                }
            </div>
        </div>
        <div class="word-info">
            <h3>Usage Examples</h3>
            <div class="examples">
                ${
                  data.usage_examples && data.usage_examples.length > 0
                    ? data.usage_examples
                        .map((ex) => `<div class="example">${ex}</div>`)
                        .join("")
                    : "No usage examples found"
                }
            </div>
        </div>
    `;
}

function displayError(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
        <div class="word-info">
            <h3>Error</h3>
            <p style="color: #dc3545;">${message}</p>
        </div>
    `;
}
