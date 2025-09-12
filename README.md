# Dark vs Light Mode Reading Comprehension

This project is a lightweight web app designed to explore how interface theme (dark mode vs light mode) affects **reading comprehension, task performance, and user comfort**.  
It was built as part of a Human-Computer Interaction (HCI) study.

---

## 📖 Overview

- Users are randomly assigned to either **light theme** or **dark theme**.
- They read a short passage of equal length/difficulty.
- They answer multiple-choice comprehension questions.
- The app records:
  - Time spent on the quiz (start → submission)
  - Comprehension score (number of correct answers)
  - Theme condition (light or dark)
  - Optional feedback on eye comfort

The **only variable** that changes between conditions is the theme.  
This allows us to measure how interface design influences reading comprehension and perceived usability.

---

## 🛠️ Implementation Notes

- **Frontend only:** HTML, CSS, JavaScript (no frameworks required).
- **Theme conditions:**  
  - `quiz.html?theme=light` → light-themed quiz  
  - `quiz.html?theme=dark` → dark-themed quiz
- **Random assignment:** Users are redirected randomly to one of the two theme conditions when starting.
- **Timing:** Captured using JavaScript timestamps (`Date.now()`).
- **Scoring:** Calculated in-browser when the user submits answers.
- **Data storage:**  
  - Results can be exported locally as JSON, or  
  - Sent to a backend/Google Sheets (optional, via a simple endpoint).

---

## 📊 Data Collected

- **Theme Condition** (light/dark)  
- **Reading Time** (ms)  
- **Comprehension Score** (# correct answers)  
- **User Feedback** (optional survey: comfort/preference)

---

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/hci-dark-light-comprehension.git
