function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = input.value.trim();
  if (message === "") return;

  // Show user's message
  chatBox.innerHTML += <div><strong>You:</strong> ${message}</div>;

  // Simple reply
  const reply = "Thank you for sharing. Keep expressing yourself.";
  chatBox.innerHTML += <div><strong>Zarify:</strong> ${reply}</div>;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
