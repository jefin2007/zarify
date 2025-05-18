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

  if (lowerMsg.includes("fail") || lowerMsg.includes("sad") || lowerMsg.includes("mistake")) {
    response = "It's okay to make mistakes. What did you learn from it?";
  } else if (lowerMsg.includes("solution") || lowerMsg.includes("how")) {
    response = "Let’s try to break it down. What exactly are you struggling with?";
  } else if (lowerMsg.includes("happy") || lowerMsg.includes("good")) {
    response = "That's amazing to hear! Keep it up.";
  } else if (lowerMsg.includes("how are you")) {
    response = "I'm just code, but I'm here for you!";
  } else {
    response = "Thanks for sharing. Want to tell me more?";
  }

  appendMessage("Zarify", response);
}
