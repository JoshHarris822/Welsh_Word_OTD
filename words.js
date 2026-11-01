const welshWords = [
  {
    word: "Hiraeth",
    category: "Noun",
    meaning: "A deep homesickness or longing for a place, person, or time that cannot be revisited.",
    exampleWelsh: "Mae hiraeth arna i am Gymru.",
    exampleEnglish: "I feel a deep longing for Wales."
  },
  {
    word: "Cwtch",
    category: "Noun / Verb",
    meaning: "An affectionate hug, cuddle, or a safe place where you feel protected.",
    exampleWelsh: "Rhowch gwtch i mi cyn mynd.",
    exampleEnglish: "Give me a cwtch before you go."
  },
  {
    word: "Bore da",
    category: "Greeting",
    meaning: "Good morning.",
    exampleWelsh: "Bore da, sut wyt ti heddiw?",
    exampleEnglish: "Good morning, how are you today?"
  },
  {
    word: "Gweddol",
    category: "Adjective",
    meaning: "Fair, middling, reasonable, or so-so.",
    exampleWelsh: "Mae'r tywydd yn weddol braf.",
    exampleEnglish: "The weather is reasonably fine."
  },
  {
    word: "Bendigedig",
    category: "Adjective",
    meaning: "Fantastic, wonderful, or blessed.",
    exampleWelsh: "Roedd y bwyd yn fendigedig.",
    exampleEnglish: "The food was wonderful."
  },
  {
    word: "Diolch yn fawr",
    category: "Phrase",
    meaning: "Thank you very much.",
    exampleWelsh: "Diolch yn fawr iawn am dy help.",
    exampleEnglish: "Thank you very much for your help."
  },
  {
    word: "Prynhawn da",
    category: "Greeting",
    meaning: "Good afternoon.",
    exampleWelsh: "Prynhawn da i chi i gyd.",
    exampleEnglish: "Good afternoon to you all."
  },
  {
    word: "Cynefin",
    category: "Noun",
    meaning: "A habitat or place where a person feels they naturally belong; spiritual ground.",
    exampleWelsh: "Mae'r arfordir hwn yn gynefin i mi.",
    exampleEnglish: "This coastline is a place of belonging for me."
  },
  {
    word: "Heddwch",
    category: "Noun",
    meaning: "Peace, tranquility, or quietude.",
    exampleWelsh: "Mwynhewch yr heddwch a'r tawelwch.",
    exampleEnglish: "Enjoy the peace and quiet."
  },
  {
    word: "Nos da",
    category: "Phrase",
    meaning: "Good night.",
    exampleWelsh: "Nos da, cysgwch yn dda.",
    exampleEnglish: "Good night, sleep well."
  }
];

// Helper to get a stable "Word of the Day" based on the calendar day
function getWordOfTheDay() {
  const now = new Date();
  const dayOfYear = Math.floor(
    (now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
  return welshWords[dayOfYear % welshWords.length];
}

// Helper to get a random word (for testing or manual cycling)
function getRandomWord() {
  const index = Math.floor(Math.random() * welshWords.length);
  return welshWords[index];
}