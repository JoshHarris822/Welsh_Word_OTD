const webpush = require("web-push");
const fs = require("fs");

// 1. Load today's word from words.js
const wordsContent = fs.readFileSync("./words.js", "utf8");
eval(wordsContent);
const todayWord = getWordOfTheDay();

// 2. Load subscriber list
if (!fs.existsSync("./subscribers.json")) {
  console.log("No subscribers.json file found.");
  process.exit(0);
}

const subscribers = JSON.parse(fs.readFileSync("./subscribers.json", "utf8"));

if (subscribers.length === 0) {
  console.log("Subscriber list is empty. Exiting.");
  process.exit(0);
}

// 3. Configure web-push with VAPID keys from environment variables
webpush.setVapidDetails(
  "mailto:joshuaharri@hotmail.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

const payload = JSON.stringify({
  title: `Gair y Dydd: ${todayWord.word}`,
  body: `${todayWord.meaning} - "${todayWord.exampleWelsh}"`,
  url: "/"
});

// 4. Send to all subscribers
Promise.all(
  subscribers.map((sub) =>
    webpush.sendNotification(sub, payload).catch((err) => {
      console.warn("Push error for one subscriber:", err.statusCode);
    })
  )
).then(() => {
  console.log(`Successfully broadcast "${todayWord.word}" to ${subscribers.length} subscriber(s).`);
});