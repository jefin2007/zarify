function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  const userDiv = document.createElement("div");
  userDiv.className = "user-message";
  userDiv.innerText = message;
  chatBox.appendChild(userDiv);

  const botDiv = document.createElement("div");
  botDiv.className = "bot-message";
  botDiv.innerText = getBotResponse(message);
  chatBox.appendChild(botDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(msg) {
  const message = msg.toLowerCase();

  if (message.includes("fail") || message.includes("mistake") || message.includes("sad")) {
    return "It’s okay to fail. Every mistake is a step toward learning. Want to talk more?";
  }

  if (message.includes("solution") || message.includes("what should i do")) {
    return "Let’s think it through. What happened exactly? We can figure this out.";
  }

  if (message.includes("how are you")) {
    return "I’m here for you. How are *you* feeling today?";
  }

  return "Thank you for sharing. Keep expressing yourself.";
}
