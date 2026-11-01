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
// Paste your VAPID Public Key between the quotes (generated via: npx web-push generate-vapid-keys)
const VAPID_PUBLIC_KEY = "BAe0__Q5Gr0QGo1_PIApVKcU4IzcD-u4a-NF5evw2biO4hY7Olu03xC8FfwkjvR3GlNZZKatRmRI5OAvvN_1058";

// Helper to convert base64 key to Uint8Array for browser push manager
function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

async function handleNotificationRequest() {
  if (!("Notification" in window) || !("serviceWorker" in navigator)) {
    statusMsg.textContent = "Notifications are not supported on this browser.";
    return;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      statusMsg.textContent = "Notification permission was declined.";
      return;
    }

    const reg = await navigator.serviceWorker.ready;
    
    // Subscribe device with Apple/Google push server
    const subscription = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(VAPID_PUBLIC_KEY)
    });

    // Send the subscription to Vercel API so it gets saved to subscribers.json
    statusMsg.textContent = "Saving subscription...";
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscription)
    });

    if (res.ok) {
      statusMsg.textContent = "Subscribed! Daily words will arrive at 9:00 AM.";
      notifyBtn.disabled = true;
      notifyBtn.style.opacity = "0.7";
    } else {
      statusMsg.textContent = "Failed to save subscription to server.";
    }
  } catch (err) {
    console.error("Subscription error:", err);
    statusMsg.textContent = "Subscription failed.";
  }
}

// Initialise on load
document.addEventListener("DOMContentLoaded", () => {
  renderDailyWord();
  registerServiceWorker();

  // Attach button click listener
  notifyBtn.addEventListener("click", handleNotificationRequest);
});