# Dark vs Light Mode Reading Comprehension

This project is a lightweight web app designed to explore how interface theme (dark mode vs light mode) affects **reading comprehension**.  
It was built as part of a Human-Computer Interaction (HCI) study.

[Access the web app here!](https://jordan1819.github.io/Light-Vs-Dark-Themes/)
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
- **Data storage:** Measurement metrics are sent to and stored in Google Sheets via an endpoint. 

---

## 📊 Data Collected

- **Theme Condition** (light/dark)  
- **Reading Time** (seconds)  
- **Comprehension Score** (# correct answers)  

---

## 👥 Authors

- 🖊️ [Jordan Waite](https://github.com/Jordan1819)  
- 🖊️ [Scott Barfuss](https://github.com/ScottBBarfuss)


---
# Project: Measuring the Impact of Light vs Dark Themes on Reading Comprehension

## Purpose & Hypothesis
**Purpose:** Build an interface that covertly tests whether UI theme (light vs dark) affects reading comprehension and speed. 

**Null Hypothesis:** There is no difference in reading comprehension when comparing themes.

**Alternative Hypothesis:** There is a measurable difference in reading comprehension when comparing themes.

**Type of Research:** Experimental - X is responsible for Y - Controlled experiment.

---

## 1. Functional Requirements
- Participants to **be randomly assigned** (Light / Dark).
- Display **reading passage** to participants.
- Present **comprehension questions** after the passage and accept submissions.
- Record and store **response accuracy** and **time taken** for each task.
- Automatically log **theme assignment** along with results for each participant.
- Ensure the **same passages and questions** are used across themes to isolate theme as the independent variable.

---

## 2. Non-Functional Requirements
- **Performance:** Pages should load quickly (target < 1s) so load time does not influence comprehension.
- **Usability:** Interface must be simple and distraction-free.
- **Consistency:** Fonts, sizes, spacing, and layout must be identical between themes; only colors should change.
- **Accessibility:** Both themes must meet text contrast guidelines (WCAG) to avoid introducing readability confounds.
- **Reliability:** Data (accuracy, timestamps, theme) must be reliably logged and persisted (survive reloads).
- **Privacy & Security:** Do not store personally identifiable information (PII). Store only anonymized IDs and experimental data.

---

## 3. Personal (User) Requirements
- Text must be readable and comfortable on different devices (responsive layout).
- Choose legible fonts and sizes to minimize eye strain.
- Provide **clear, concise instructions** so participants understand what to do without prompting.
- If multiple passages are used, include a **progress indicator** and reasonable pacing.
- Participants should **not be told the true purpose** (theme study) to avoid demand characteristics.

---

## 4. Experimental Variables

| Variable Type           | Description |
|-------------------------|-------------|
| **Independent Variable**| **Theme** — Light vs Dark (manipulated condition) |
| **Dependent Variables** | Reading comprehension performance measured by: 1) **Accuracy** (number of correct answers), 2) **Time** (time to read + answer) |

**Notes:**  
- Control variables: same passages, identical typography/spacing, consistent passage order or counterbalancing, similar ambient instructions.  
- Randomize theme assignment (or counterbalance across participants) to avoid selection bias.

---

## 5. Data to Collect (example)  
- Assigned theme (Light / Dark)  
- Time taken (derived)  
- Answers to comprehension questions (correct/incorrect)  

---

## 6. Analysis Plan (brief)
- Compare mean accuracy between themes (t-test or nonparametric equivalent).  
- Compare mean time taken per participant between themes.  

---

## Summary Table

| Category                | Key Items |
|-------------------------|-----------|
| Functional              | Show passages, assign theme, collect answers & time |
| Non-Functional          | Fast, consistent formatting, accessible, reliable logging |
| Personal (User)         | Comfortable reading, clear instructions, no biasing info |
| Independent Variable    | Theme (Light vs Dark) |
| Dependent Variables     | Comprehension accuracy & reading time |

---
