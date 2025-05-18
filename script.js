function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.innerText = input.value;
  chatBox.appendChild(userMessage);

  const reply = document.createElement("div");
  reply.className = "bot-message";
  reply.innerText = getBotReply(input.value);
  chatBox.appendChild(reply);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
  message = message.toLowerCase();

  const sadReplies = [
    "I'm here for you. Want to talk more about it?",
    "It's okay to feel down sometimes. I'm listening.",
    "You’re not alone — let it out if you want.",
  ];

  const happyReplies = [
    "That’s awesome! Keep smiling!",
    "Glad to hear that! Keep spreading the good vibes.",
    "Happiness looks great on you!",
  ];

  const aloneReplies = [
    "You’re not alone. I'm with you.",
    "I’m here whenever you want to chat.",
    "It’s okay to feel lonely sometimes, but remember, I’m here.",
  ];

  const defaultReplies = [
    "Thank you for sharing. Keep expressing yourself.",
    "I appreciate you opening up.",
    "Feel free to tell me more whenever you like.",
  ];

  function randomReply(replies) {
    return replies[Math.floor(Math.random() * replies.length)];
  }

  if (message.includes("sad") || message.includes("bad")) {
    return randomReply(sadReplies);
  } else if (message.includes("happy") || message.includes("good")) {
    return randomReply(happyReplies);
  } else if (message.includes("alone")) {
    return randomReply(aloneReplies);
  } else {
    return randomReply(defaultReplies);
  }
}

  if (message.includes("sad") || message.includes("bad")) {
    return "I'm here for you. Want to talk more about it?";
  } else if (message.includes("happy") || message.includes("good")) {
    return "That’s awesome! Keep smiling!";
  } else if (message.includes("alone")) {
    return "You’re not alone. I'm with you.";
  } else {
    return "Thank you for sharing. Keep expressing yourself.";
  }
}
