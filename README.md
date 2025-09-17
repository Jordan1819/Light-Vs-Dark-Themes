# Dark vs Light Mode Reading Comprehension

This project is a lightweight web app designed to explore how interface theme (dark mode vs light mode) affects **reading comprehension**.  
It was built as part of a Human-Computer Interaction (HCI) study.

---

## 🎯 Research Goal

The purpose of this project is to **evaluate whether dark mode or light mode impacts reading comprehension, speed, and accuracy**.

---

## 📖 Overview

- Users are randomly assigned to either **light theme** or **dark theme**.
- They read a short passage of equal length/difficulty.
- They answer multiple-choice comprehension questions.
- The app records:
  - Time spent on the quiz (start → submission)
  - Comprehension score (number of correct answers)
  - Theme condition (light or dark)

The **only variable** that changes between conditions is the theme.  
This allows us to measure how interface design influences reading comprehension and accuracy.

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

## 👥 Authors

- 🖊️ [Jordan Waite](https://github.com/Jordan1819)  
- 🖊️ [Scott Barfuss](https://github.com/their-username)
