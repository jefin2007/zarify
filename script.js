function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  appendMessage("You", message);
  input.value = "";
  generateResponse(message);
}

function appendMessage(sender, message) {
  const chat = document.getElementById("chat");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chat.appendChild(messageElement);
  chat.scrollTop = chat.scrollHeight;
}

function generateResponse(message) {
  const lowerMsg = message.toLowerCase();
  let response = "";

  // Keywords for smarter replies
  if (lowerMsg.includes("sad") || lowerMsg.includes("depressed") || lowerMsg.includes("fail")) {
    response = "I'm really sorry you're feeling that way. Want to talk more about it?";
  } else if (lowerMsg.includes("happy") || lowerMsg.includes("good") || lowerMsg.includes("great")) {
    response = "That's wonderful! Keep holding onto that feeling.";
  } else if (lowerMsg.includes("solution") || lowerMsg.includes("fix") || lowerMsg.includes("mistake")) {
    response = "Try to look at what went wrong, learn one thing from it, and take a small step to improve.";
  } else if (lowerMsg.includes("how are you")) {
    response = "I'm doing well! I'm here to support you.";
  } else if (lowerMsg.includes("alone") || lowerMsg.includes("lonely")) {
    response = "You're not alone. I'm here with you. Want to share more?";
  } else {
    response = "Thank you for sharing. Keep expressing yourself — I'm here to listen.";
  }

  appendMessage("Zarify", response);
}
