// DOM Element References
const categoryEl = document.getElementById("word-category");
const welshWordEl = document.getElementById("welsh-word");
const meaningEl = document.getElementById("english-meaning");
const exampleEl = document.getElementById("example-sentence");
const notifyBtn = document.getElementById("notify-btn");
const statusMsg = document.getElementById("status-msg");

// 1. Populate the UI with today's Welsh word
function renderDailyWord() {
  const currentWord = getWordOfTheDay();

  categoryEl.textContent = currentWord.category;
  welshWordEl.textContent = currentWord.word;
  meaningEl.textContent = currentWord.meaning;
  exampleEl.innerHTML = `<em>"${currentWord.exampleWelsh}"</em> (${currentWord.exampleEnglish})`;
}

// 2. Register Service Worker for PWA & Push capability
async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("sw.js");
      console.log("Service Worker registered with scope:", registration.scope);
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  } else {
    console.warn("Service Workers are not supported in this browser.");
  }
}

// 3. Request Notification Permission
async function handleNotificationRequest() {
  if (!("Notification" in window)) {
    statusMsg.textContent = "Notifications are not supported on this browser.";
    return;
  }

  // Check current permission state
  if (Notification.permission === "granted") {
    statusMsg.textContent = "Notifications are already enabled!";
    return;
  }

  if (Notification.permission === "denied") {
    statusMsg.textContent = "Notifications were blocked in browser settings.";
    return;
  }

  // Prompt the user (must happen directly inside this click handler)
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      statusMsg.textContent = "Enabled! Lock screen words will arrive on schedule.";
      notifyBtn.disabled = true;
      notifyBtn.style.opacity = "0.7";

      // Trigger an immediate test notification to verify lock screen rendering
      const reg = await navigator.serviceWorker.ready;
      reg.showNotification("Gair y Dydd: Prawf Llwyddiannus!", {
        body: "Croeso! Mae hysbysiadau sgrin glo yn gweithio. (Welcome! Lock screen notifications are working.)",
        icon: "/icons/icon-192.png",
        badge: "/icons/icon-192.png"
      });
    } else {
      statusMsg.textContent = "Notification permission was declined.";
    }
  } catch (error) {
    console.error("Error requesting permission:", error);
    statusMsg.textContent = "Failed to request permission.";
  }
}

// Initialise on load
document.addEventListener("DOMContentLoaded", () => {
  renderDailyWord();
  registerServiceWorker();

  // Attach button click listener
  notifyBtn.addEventListener("click", handleNotificationRequest);
});