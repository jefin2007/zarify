function sendMessage() {
  const input = document.getElementById("userInput").value.toLowerCase().trim();
  const chatBox = document.getElementById("chatBox");

  if (!input) return;

  addMessage("You: " + input, "user");

  let response = getResponse(input);

  addMessage("Zarify: " + response, "bot");

  document.getElementById("userInput").value = "";
}

function addMessage(message, sender) {
  const chatBox = document.getElementById("chatBox");
  const messageElem = document.createElement("div");
  messageElem.className = sender === "user" ? "userMessage" : "botMessage";
  messageElem.textContent = message;
  chatBox.appendChild(messageElem);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(input) {
  // Keywords and responses with simple solutions
  const responses = [
    {
      keywords: ["how are you", "how r u", "how you", "how's it going"],
      reply: "I'm doing great, thanks for asking! How can I help you today?"
    },
    {
      keywords: ["sad", "depressed", "unhappy", "down", "feeling bad"],
      reply: "I'm sorry to hear that. Remember, it's okay to feel this way. Would you like some tips on how to feel better?"
    },
    {
      keywords: ["failed", "fail", "failure", "bad result"],
      reply: "Failure is just a step towards success. Try to analyze what went wrong and keep practicing. Need some advice on improving?"
    },
    {
      keywords: ["advice", "help", "tips", "solution", "how to"],
      reply: "Sure! Can you tell me more about what you need advice on?"
    },
    {
      keywords: ["football test", "sports", "game", "match"],
      reply: "Sports are all about practice and persistence. Keep training and stay positive! Want some specific tips?"
    },
    {
      keywords: ["stress", "anxiety", "worried", "nervous"],
      reply: "Try deep breathing exercises or a short walk to calm your mind. Want me to share more stress relief tips?"
    },
    {
      keywords: ["thank you", "thanks", "thx", "appreciate"],
      reply: "You're welcome! I'm always here to listen."
    },
    {
      keywords: ["hello", "hi", "hey", "good morning", "good evening"],
      reply: "Hello! How can I support you today?"
    }
  ];

  for (const item of responses) {
    for (const keyword of item.keywords) {
      if (input.includes(keyword)) {
        return item.reply;
      }
    }
  }

  // Default fallback
  return "Thank you for sharing. Keep expressing yourself!";
}
