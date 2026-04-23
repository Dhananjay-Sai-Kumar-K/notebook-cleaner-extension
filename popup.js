function send(action) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

    // inject content script FIRST (important)
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["content.js"]
    }, () => {
      chrome.tabs.sendMessage(tabs[0].id, { action });
    });

  });
}

document.getElementById("start").onclick = () => send("start");
document.getElementById("pause").onclick = () => send("pause");
document.getElementById("resume").onclick = () => send("resume");
document.getElementById("stop").onclick = () => send("stop");

document.getElementById("toggleTheme").onclick = () => {
  document.body.classList.toggle("light");
};

// receive updates from content.js
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "update") {
    document.getElementById("deleted").innerText = msg.count;
    document.getElementById("status").innerText = msg.status;
    document.getElementById("progress").style.width = msg.progress + "%";

    const log = document.getElementById("log");
    let className = "";

    if (msg.log.includes("✅")) className = "success";
    else if (msg.log.includes("⚠")) className = "warn";
    else if (msg.log.includes("❌")) className = "error";

    log.innerHTML += `<div class="${className}">${msg.log}</div>`;
    log.scrollTop = log.scrollHeight;
  }
});