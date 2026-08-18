# 🧠 ContextIQ — AI-Powered Contextual Assistant

An intelligent browser companion built with Chrome Extension architecture and AI backend integration to analyze webpage content, summarize context, and assist user workflows in real time.

---

## 🎯 About This Project

**ContextIQ** is an AI-empowered productivity tool designed to bridge browser interactions with intelligent contextual processing. It enables users to instantly extract, analyze, and generate actionable insights from active web pages directly inside their browser via a lightweight Chrome Extension interface powered by a dedicated backend service.

---

## ✨ Features

* **Instant Web Content Extraction:** Seamlessly reads and parses active page content without disrupting the browsing flow.
* **Context-Aware AI Processing:** Communicates with the backend engine to deliver accurate summaries, answers, and analytical breakdowns.
* **Seamless Extension UI:** Intuitive browser popup and side-panel interface for smooth user interactions.
* **Decoupled Architecture:** Clean separation between the client-side Chrome Extension (`Manifest V3`) and the server-side backend API.
* **Low Latency Responses:** Optimized endpoint handling for fast generation and minimal latency.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Extension Frontend** | JavaScript (ES6+), HTML5, CSS3, Chrome Extensions API (Manifest V3) |
| **Backend API** | Node.js / Express / Python |
| **AI Integration** | Google Gemini API |
| **Version Control** | Git & GitHub |

---

## 🚀 How to Run ContextIQ Locally

Follow these step-by-step instructions to get both the backend server and the Chrome extension running on your machine.

---

### Step 1: Clone the Repository

```bash
git clone [https://github.com/mustard-collab/ContextIQ.git](https://github.com/mustard-collab/ContextIQ.git)
cd ContextIQ
```
---

### Step 2: Set Up & Start the Backend
1. Open your terminal and navigate into the backend directory:

```Bash
cd backend
```
2. Install all required dependencies:

For Node.js / JavaScript projects:

```Bash
npm install
For Python projects:
```
```Bash
pip install -r requirements.txt
```
3. Configure Environment Variables:
Create a .env file in the root of the backend/ folder and insert your credentials:

Code snippet
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000

4. Start the backend server:

For Node.js:

```Bash
npm start
# or: node index.js / node server.js
For Python:
```
```Bash
python main.py
# or: uvicorn main:app --reload
(Your backend should now be running locally, e.g., at http://localhost:5000 or http://localhost:8000)
```
---

### Step 3: Load the Extension into Google Chrome

1. Open Google Chrome and go to chrome://extensions/.

2. In the top-right corner, toggle Developer mode to ON.

3. Click the Load unpacked button in the top-left corner.

4. Select the extension folder from your ContextIQ project directory.

5. Pin ContextIQ to your Chrome toolbar and open any webpage to start using it!

---


## 📄 License
All Rights Reserved. This code is publicly viewable for portfolio and demo purposes only.

---


## 👤 Author

**Muhammad Mustafa Khan**  
*AI-Empowered Full-Stack Developer & Computer Networks & Security Student @ SSUET*

* **GitHub:** [@mustard-collab](https://github.com/mustard-collab)
* **LinkedIn:** [muhammad-mustafa11](https://www.linkedin.com/in/muhammad-mustafa11)
* **Portfolio:** [mustard-collab.github.io/portfolio](https://mustard-collab.github.io/portfolio)
