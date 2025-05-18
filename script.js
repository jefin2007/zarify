function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage("You", message);
  input.value = "";

  setTimeout(() => {
    const botReply = getBotReply(message);
    addMessage("Zarify", botReply);
  }, 500);
}

function addMessage(sender, text) {
  const chat = document.getElementById("chat");
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chat.appendChild(messageElement);
  chat.scrollTop = chat.scrollHeight;
}

function getBotReply(message) {
  const msg = message.toLowerCase();

  const responses = [
    { keywords: ["how are you", "how r u"], reply: "I'm doing great! How about you?" },
    { keywords: ["hello", "hi", "hey"], reply: "Hey there! How can I help you today?" },
    { keywords: ["sad", "depressed", "bad"], reply: "I'm here for you. Want to talk more about it?" },
    { keywords: ["happy", "joy", "excited"], reply: "That's amazing! Keep that energy alive!" },
    { keywords: ["alone", "lonely"], reply: "You're not alone. I'm with you." },
    { keywords: ["love"], reply: "Love is powerful. Want to talk about it?" },
    { keywords: ["angry", "mad", "furious"], reply: "It’s okay to feel that way. Want to vent a bit?" },
    { keywords: ["life", "meaning", "purpose"], reply: "Life is a journey. What part are you exploring today?" },
    { keywords: ["fail", "failure", "useless"], reply: "You're not a failure. Every step matters." },
    { keywords: ["thank", "thanks"], reply: "You're welcome. Always here for you." },
    { keywords: ["bye", "goodbye"], reply: "Take care. Come back anytime." }
  ];

  for (const item of responses) {
    if (item.keywords.some(kw => msg.includes(kw))) {
      return item.reply;
    }
  }

  return "I may not understand everything, but I'm always here to listen.";
}
