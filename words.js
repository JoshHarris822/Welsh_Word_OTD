const monthlyWelshWords = {
  1: {
    word: "Bore da",
    category: "Greeting",
    meaning: "Good morning.",
    exampleWelsh: "Bore da, sut wyt ti heddiw?",
    exampleEnglish: "Good morning, how are you today?"
  },
  2: {
    word: "Hiraeth",
    category: "Noun",
    meaning: "A deep homesickness or longing for a home, place, or time you cannot return to.",
    exampleWelsh: "Mae hiraeth arna i am Gymru.",
    exampleEnglish: "I feel a deep longing for Wales."
  },
  3: {
    word: "Cwtch",
    category: "Noun / Verb",
    meaning: "An affectionate hug, cuddle, or a safe place where you feel protected.",
    exampleWelsh: "Rhowch gwtch i mi cyn mynd.",
    exampleEnglish: "Give me a cwtch before you go."
  },
  4: {
    word: "Gweddol",
    category: "Adjective",
    meaning: "Fair, middling, reasonable, or so-so.",
    exampleWelsh: "Mae'r tywydd yn weddol braf.",
    exampleEnglish: "The weather is reasonably fine."
  },
  5: {
    word: "Bendigedig",
    category: "Adjective",
    meaning: "Fantastic, wonderful, or blessed.",
    exampleWelsh: "Roedd y bwyd yn fendigedig.",
    exampleEnglish: "The food was wonderful."
  },
  6: {
    word: "Diolch yn fawr",
    category: "Phrase",
    meaning: "Thank you very much.",
    exampleWelsh: "Diolch yn fawr iawn am dy help.",
    exampleEnglish: "Thank you very much for your help."
  },
  7: {
    word: "Prynhawn da",
    category: "Greeting",
    meaning: "Good afternoon.",
    exampleWelsh: "Prynhawn da i chi i gyd.",
    exampleEnglish: "Good afternoon to you all."
  },
  8: {
    word: "Cynefin",
    category: "Noun",
    meaning: "A place or habitat where a person feels they naturally belong.",
    exampleWelsh: "Mae'r arfordir hwn yn gynefin i mi.",
    exampleEnglish: "This coastline is a place of belonging for me."
  },
  9: {
    word: "Heddwch",
    category: "Noun",
    meaning: "Peace, tranquility, or quietude.",
    exampleWelsh: "Mwynhewch yr heddwch a'r tawelwch.",
    exampleEnglish: "Enjoy the peace and quiet."
  },
  10: {
    word: "Nos da",
    category: "Phrase",
    meaning: "Good night.",
    exampleWelsh: "Nos da, cysgwch yn dda.",
    exampleEnglish: "Good night, sleep well."
  },
  11: {
    word: "Croeso",
    category: "Greeting / Noun",
    meaning: "Welcome.",
    exampleWelsh: "Croeso i Gymru!",
    exampleEnglish: "Welcome to Wales!"
  },
  12: {
    word: "Hwyl fawr",
    category: "Phrase",
    meaning: "Goodbye / farewell.",
    exampleWelsh: "Hwyl fawr, welai di yfory.",
    exampleEnglish: "Goodbye, see you tomorrow."
  },
  13: {
    word: "Llawen",
    category: "Adjective",
    meaning: "Joyful, cheerful, or merry.",
    exampleWelsh: "Mae pawb yn edrych yn llawen iawn heddiw.",
    exampleEnglish: "Everyone looks very cheerful today."
  },
  14: {
    word: "Caredig",
    category: "Adjective",
    meaning: "Kind or caring.",
    exampleWelsh: "Roedd hi'n garedig iawn i helpu.",
    exampleEnglish: "She was very kind to help."
  },
  15: {
    word: "Diddorol",
    category: "Adjective",
    meaning: "Interesting.",
    exampleWelsh: "Mae hwnna'n llyfr hynod ddiddorol.",
    exampleEnglish: "That is an exceptionally interesting book."
  },
  16: {
    word: "Gobeithio",
    category: "Verb",
    meaning: "To hope.",
    exampleWelsh: "Gobeithio bod popeth yn iawn.",
    exampleEnglish: "Hope everything is okay."
  },
  17: {
    word: "Mynydd",
    category: "Noun",
    meaning: "Mountain.",
    exampleWelsh: "Aethon ni am dro i fyny'r mynydd.",
    exampleEnglish: "We went for a walk up the mountain."
  },
  18: {
    word: "Awyr",
    category: "Noun",
    meaning: "Sky or air.",
    exampleWelsh: "Mae'r awyr yn glir heno.",
    exampleEnglish: "The sky is clear tonight."
  },
  19: {
    word: "Mor",
    category: "Noun",
    meaning: "Sea / ocean.",
    exampleWelsh: "Mae'r mor yn dawel heddiw.",
    exampleEnglish: "The sea is calm today."
  },
  20: {
    word: "Cymydog",
    category: "Noun",
    meaning: "Neighbour.",
    exampleWelsh: "Mae fy nghymydog yn gyfeillgar iawn.",
    exampleEnglish: "My neighbour is very friendly."
  },
  21: {
    word: "Dymuniadau",
    category: "Noun",
    meaning: "Wishes or greetings.",
    exampleWelsh: "Dymuniadau gorau ar gyfer y dyfodol.",
    exampleEnglish: "Best wishes for the future."
  },
  22: {
    word: "Hyfryd",
    category: "Adjective",
    meaning: "Lovely, delightful, or pleasant.",
    exampleWelsh: "Mae'n ddiwrnod hyfryd heddiw.",
    exampleEnglish: "It is a lovely day today."
  },
  23: {
    word: "Ysgrifennu",
    category: "Verb",
    meaning: "To write.",
    exampleWelsh: "Rwy'n ysgrifennu neges fer atat ti.",
    exampleEnglish: "I am writing a short message to you."
  },
  24: {
    word: "Dysgu",
    category: "Verb",
    meaning: "To learn or to teach.",
    exampleWelsh: "Dw i'n mwynhau dysgu Cymraeg.",
    exampleEnglish: "I enjoy learning Welsh."
  },
  25: {
    word: "Teulu",
    category: "Noun",
    meaning: "Family.",
    exampleWelsh: "Mae teulu'n bwysig i bawb.",
    exampleEnglish: "Family is important to everyone."
  },
  26: {
    word: "Ffrind",
    category: "Noun",
    meaning: "Friend.",
    exampleWelsh: "Mae'n braf cwrdd â ffrind da.",
    exampleEnglish: "It is nice to meet a good friend."
  },
  27: {
    word: "Gobaith",
    category: "Noun",
    meaning: "Hope.",
    exampleWelsh: "Mae lle bob amser ar gyfer gobaith.",
    exampleEnglish: "There is always room for hope."
  },
  28: {
    word: "Gweithio",
    category: "Verb",
    meaning: "To work.",
    exampleWelsh: "Dw i'n gweithio'n galed heddiw.",
    exampleEnglish: "I am working hard today."
  },
  29: {
    word: "Taith",
    category: "Noun",
    meaning: "Journey or trip.",
    exampleWelsh: "Cafon ni daith wych ar hyd yr arfordir.",
    exampleEnglish: "We had a great trip along the coast."
  },
  30: {
    word: "Cartref",
    category: "Noun",
    meaning: "Home.",
    exampleWelsh: "Nid oes unlle fel cartref.",
    exampleEnglish: "There is nowhere like home."
  },
  31: {
    word: "Ymlaen",
    category: "Adverb",
    meaning: "Forward, onwards, or ahead.",
    exampleWelsh: "Dal ati ac ymlaen â'r gwaith!",
    exampleEnglish: "Keep at it and forward with the work!"
  }
};

// Automatically matches the exact day of the month (1-31)
function getWordOfTheDay() {
  const dayOfMonth = new Date().getDate(); // Returns 1 to 31
  return monthlyWelshWords[dayOfMonth] || monthlyWelshWords[1];
}