# 🧹 Notebook Cleaner Extension

⚡ Clean your workspace in seconds — safely, automatically, and with full control.

A Chrome Extension that enables **bulk deletion of notebooks** with real-time progress tracking, pause/resume controls, and robust DOM automation.

---

## 🚀 Features

* 🗑️ **Bulk Delete Notebooks** — Remove all notebooks with one click
* 📊 **Real-Time Progress Tracking** — Accurate percentage based on total count
* ⏸️ **Pause / Resume Support** — Full control during execution
* ⛔ **Stop Anytime** — Safely terminate the process
* 🔁 **Smart Retry Logic** — Handles UI delays and failures
* 📜 **Live Activity Log** — See exactly what’s happening
* 🎨 **Clean Modern UI** — Minimal and responsive popup interface

---

## 🎬 Demo

<img width="1000" height="852" alt="Animation" src="https://github.com/user-attachments/assets/c1432509-2595-4050-baea-1ef7998a5e4f" />

```
Before → Click Start → Auto Delete → Clean Workspace
```

---

## 📸 Screenshots

### 🔹 Before
<img width="1095" height="594" alt="image" src="https://github.com/user-attachments/assets/25052ce4-772c-47a7-90b5-465f2bdd26a7" />


### 🔹 After

<img width="1919" height="907" alt="Screenshot 2026-04-23 123243" src="https://github.com/user-attachments/assets/249ee650-4a51-4af3-b5e8-329c3017767e" />

---

## 🧠 How It Works

### Architecture Flow

```
Popup UI → Sends Message → Content Script → Interacts with DOM
```

### Key Concepts

* **Content Script**: Controls and manipulates the webpage
* **Message Passing**: Enables communication between UI and script
* **State Management**: Ensures stable execution across actions
* **Async Control**: Handles UI delays and interactions reliably

---

## 🛠️ Installation (Local Development)

1. Clone the repository:

```bash
git clone https://github.com/your-username/notebook-cleaner-extension.git
```

2. Open Chrome and go to:

```
chrome://extensions/
```

3. Enable **Developer Mode**

4. Click **Load Unpacked**

5. Select the project folder

---

## ▶️ Usage

1. Open the notebook page
2. Click the extension icon 🧩
3. Click **Start**

### Controls:

* ▶ Start — Begin deletion
* ⏸ Pause — Temporarily stop
* ▶ Resume — Continue
* ⛔ Stop — End process

---

## 📊 Progress Tracking

Unlike basic scripts, this extension calculates **real progress**:

```
Progress = (Deleted Notebooks / Total Notebooks) × 100
```

---

## ⚠️ Edge Case Handling

* Handles missing UI elements gracefully
* Stops safely if structure changes
* Prevents duplicate execution
* Works with dynamic page updates

---

## 🧪 Tech Stack

* JavaScript (Vanilla)
* HTML5 + CSS3
* Chrome Extension APIs
* DOM Manipulation

---

## 🧠 Challenges & Solutions

| Challenge                 | Solution                          |
| ------------------------- | --------------------------------- |
| DOM changes dynamically   | Retry logic + delays              |
| Script reinjection issues | Persistent state management       |
| UI lag                    | Async control with sleep()        |
| Message failures          | Script injection before messaging |

---

## 🎯 Why I Built This

Manually deleting notebooks is repetitive and inefficient.
This tool automates the process with **precision, safety, and user control**, turning a tedious task into a seamless experience.

---

## 🚀 Future Improvements

* 🔄 Auto-scroll to load all notebooks
* 💾 Resume after page refresh
* 📈 Estimated time remaining (ETA)
* 🎯 Selective deletion (by name/date)

---

## 📌 Keywords

`chrome-extension` `automation` `web-automation` `dom-manipulation` `bulk-delete` `productivity`

---

## 🙌 Contribution

Feel free to fork, improve, and submit PRs!

---

## 📄 License

MIT License

---

## ⭐ Support

If you found this useful, consider giving it a ⭐ on GitHub!
