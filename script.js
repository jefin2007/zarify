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
