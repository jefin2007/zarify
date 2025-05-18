function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage("You", message);
  input.value = "";

  const reply = getBotReply(message.toLowerCase());
  setTimeout(() => {
    addMessage("Zarify", reply);
  }, 600);
}

function addMessage(sender, text) {
  const chat = document.getElementById("chat");
  const messageDiv = document.createElement("div");
  messageDiv.className = sender === "You" ? "user-message" : "bot-message";
  messageDiv.innerText = `${sender}: ${text}`;
  chat.appendChild(messageDiv);
  chat.scrollTop = chat.scrollHeight;
}

function getBotReply(message) {
  // Keyword-based responses
  const responses = [
    {
      keywords: ["sad", "depressed", "upset", "down"],
      reply: "I'm really sorry you're feeling this way. You're not alone. Do you want to talk about it?"
    },
    {
      keywords: ["happy", "good", "great", "awesome"],
      reply: "That's amazing! I'm glad you're feeling good. Keep spreading those good vibes!"
    },
    {
      keywords: ["football", "lost", "fail", "exam", "test"],
      reply: "It's okay to fail. Every mistake is a lesson. What did you learn from it?"
    },
    {
      keywords: ["solution", "what should I do", "how", "fix", "help me"],
      reply: "Try breaking the problem into smaller parts. What exactly are you struggling with?"
    },
    {
      keywords: ["angry", "frustrated", "annoyed"],
      reply: "Take a deep breath. It's okay to feel that way. Do you want to share what happened?"
    },
    {
      keywords: ["love", "heartbreak", "crush", "miss"],
      reply: "Matters of the heart are tough. I'm here for you—want to talk about it?"
    },
    {
      keywords: ["alone", "lonely", "nobody", "ignored"],
      reply: "You're not alone. I’m here to listen. What’s making you feel this way?"
    },
  ];

  // Match message to keywords
  for (const item of responses) {
    for (const keyword of item.keywords) {
      if (message.includes(keyword)) {
        return item.reply;
      }
    }
  }

  // Default reply
  return "Thank you for sharing. Keep expressing yourself. I'm here to listen.";
}
