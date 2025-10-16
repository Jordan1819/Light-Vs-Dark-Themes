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

// If user already finished reading (same tab/session),
// keep questions visible.
(function enforcePhaseOnLoad() {
    if (sessionStorage.getItem('readingFinished') === '1') {
        const p = document.getElementById('passageContainer');
        const q = document.getElementById('quizContainer');
        const s = document.getElementById('submitButton');
        if (p) p.style.display = 'none';
        if (q) q.style.display = 'block';
        if (s) s.style.display = 'inline-block';
    }
})();

// If user hits the Back button after finishing, keep them on questions.
window.addEventListener('popstate', () => {
    if (sessionStorage.getItem('readingFinished') === '1') {
        const p = document.getElementById('passageContainer');
        const q = document.getElementById('quizContainer');
        const s = document.getElementById('submitButton');
        if (p) p.style.display = 'none';
        if (q) q.style.display = 'block';
        if (s) s.style.display = 'inline-block';
        history.go(1);
    }
});

// sendResultsToSheets: Send results to Google Sheets 
// via Google Apps Script
function sendResultsToSheets(score) {
    const endTime = Date.now();
    const timeSpentMS = endTime - startTime; // in milliseconds
    const timeSpentSeconds = Math.round(timeSpentMS / 1000);
    // Get selected theme from localStorage
    const theme = localStorage.getItem('selectedTheme');

    fetch("https://script.google.com/macros/s/AKfycbxWAPOgMTcBWcPEGZbnuJ8S_JzEqRX7rKkZcPISMXM5RlAdsmtR0FlSxX4t5G1J7rm3/exec", {
        method: "POST",
        mode: "no-cors", // bypass CORS
        body: JSON.stringify({
            theme: theme,
            score: score,
            timeSpent: timeSpentSeconds
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(() => {
        console.log("Data sent to Google Sheets (no response due to no-cors).");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

// calculateScore: Calculate quiz score based on correct answers
function calculateScore() {
    // Create list of correct answers
    const correctAnswers = {
        q1: 'A',
        q2: 'A',
        q3: 'C',
        q4: 'B',
        q5: 'C'
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
    sessionStorage.setItem('readingFinished', '1');

    document.getElementById("passageContainer").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("submitButton").style.display = "inline-block";

    history.pushState({phase:'questions'}, '', '#q');
    history.pushState({phase:'questions2'}, '', '#q2');
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
