# 🎮 Guess The Number Game

A simple and fun web-based game where the player tries to guess a randomly generated number between **1 and 100**. Built using **HTML, CSS, JavaScript**, and styled with **Bootstrap**.

---

## 🛠️ Tech Stack
- **HTML5** – Structure
- **CSS3** – Styling
- **Bootstrap 4.5** – Responsive design
- **JavaScript (DOM Manipulation)

📂 Project Structure
number-guessing-game/
│── index.html
│── style.css
│── script.js
│── README.md

🧠 How It Works

A random number is generated using:

let random = Math.ceil(Math.random() * 100);
User enters a number in the input field.
When the button is clicked:
If guess > random → "Too High"
If guess < random → "Too Low"
If guess === random → "Correct!"
Invalid input → Error message

## 🙌 Author

Created as part of my JavaScript learning journey 🚀