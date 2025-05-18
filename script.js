// Function to add messages to chat window
function addMessageToChat(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.className = sender === "You" ? "user-message" : "bot-message";
  messageElement.textContent = `${sender}: ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to latest
}

// Function to get varied bot replies based on user message
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

// Function to send user message and get bot reply
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return; // don't send empty messages

  addMessageToChat("You", message);
  input.value = "";

  // Simulate bot reply delay
  setTimeout(() => {
    const reply = getBotReply(message);
    addMessageToChat("Bot", reply);
  }, 500);
}

// Optional: Enable sending message by pressing Enter key
document.getElementById("user-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
