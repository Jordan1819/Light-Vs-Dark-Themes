const startTime = Date.now();
// setTheme: Randomly select a theme, store in localStorage, 
// and apply css
function setTheme() {
    // Randomly select & store theme
    const theme = Math.random() < 0.5 ? 'light' : 'dark';
    localStorage.setItem('selectedTheme', theme);
    // Set theme for this page
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `styles/${theme}.css`;
    document.head.appendChild(link);
};
setTheme();

// sendResultsToSheets: Send results to Google Sheets 
// via Google Apps Script
function sendResultsToSheets(score) {
    const endTime = Date.now();
    const timeSpentMS = endTime - startTime; // in milliseconds
    const timeSpentSeconds = Math.round(timeSpentMS / 1000);
    // Get selected theme from localStorage
    const theme = localStorage.getItem('selectedTheme');

    fetch("https://script.google.com/macros/s/AKfycby5l3barPopTxMO7Vbsg6GMv4A_TcgCoVF2KDqDbhBRTIQtbP7PFbzknMbJrPrW3HUb/exec", {
        method: "POST",
        body: JSON.stringify({
            theme: theme,
            score: score,
            timeSpent: timeSpentSeconds
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

// calculateScore: Calculate quiz score based on correct answers
function calculateScore() {
    // Create list of correct answers
    const correctAnswers = {
        q1: 'b',
        q2: 'a',
        q3: 'c',
        q4: 'a',
        q5: 'b'
    };
    let score = 0;
    // Iterate through each question
    for (let q in correctAnswers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === correctAnswers[q]) {
            score++;
        }
    }
    return score;
}

// Finished reading button handler
// Make the passage disappear and quiz appear
document.getElementById('finishedReadingButton').addEventListener("click", () => {
    document.getElementById("passageContainer").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("submitButton").style.display = "inline-block";
});

// Submit button handler
// Send results to Google Sheets
// Hide submit button and display score
document.getElementById('submitButton').addEventListener("click", () => {
    const score = calculateScore();
    sendResultsToSheets(score);
    document.getElementById("submitButton").style.display = "none";
    const resultDiv = document.createElement("div");
    resultDiv.textContent = `You scored ${score} out of 5. Thank you for your participation! Please close this tab.`;
    document.getElementById("quizContainer").appendChild(resultDiv);
})