window.cleanerState = window.cleanerState || {
  running: false,
  paused: false,
  stopped: false,
  count: 0,
  total: 0
};

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function getCard() {
  const a = document.querySelector('a[href^="/notebook/"]');
  return a ? a.closest('mat-card, div') : null;
}

function sendUpdate(status, log) {
  const state = window.cleanerState;

  const progress = state.total
    ? Math.round((state.count / state.total) * 100)
    : 0;

  chrome.runtime.sendMessage({
    type: "update",
    count: state.count,
    status,
    progress,
    log
  });
}

async function deleteLoop() {
  const state = window.cleanerState;

  if (state.running) return;

  state.running = true;
  state.stopped = false;

  if (state.total === 0) {
  state.total = getTotalNotebooks();
}

  while (state.running && !state.stopped) {

    if (state.paused) {
      sendUpdate("Paused", "⏸ Paused...");
      await sleep(500);
      continue;
    }

    const card = getCard();

    if (!card) {
      sendUpdate("Done", "🎉 Nothing to delete");
      state.running = false;
      break;
    }

    sendUpdate("Deleting", `🗑️ Deleting #${state.count + 1}`);

    const btn = card.querySelector('button');
    if (!btn) {
      sendUpdate("Error", "❌ Button not found");
      break;
    }

    btn.click();
    await sleep(500);

    const del = [...document.querySelectorAll('button, span')]
      .find(e => e.textContent?.toLowerCase().includes('delete'));

    if (!del) continue;

    del.click();
    await sleep(500);

    const confirm = [...document.querySelectorAll('button')]
      .find(e => e.textContent?.toLowerCase().includes('delete'));

    if (!confirm) continue;

    confirm.click();

    state.count++;
    sendUpdate("Success", "✅ Deleted");

    await sleep(3000);
  }
}

chrome.runtime.onMessage.addListener((msg) => {
  const state = window.cleanerState;

  if (msg.action === "start") deleteLoop();
  if (msg.action === "pause") state.paused = true;
  if (msg.action === "resume") state.paused = false;

  if (msg.action === "stop") {
    state.stopped = true;
    state.running = false;
  }
});

function getTotalNotebooks() {
  return document.querySelectorAll('a[href^="/notebook/"]').length;
}