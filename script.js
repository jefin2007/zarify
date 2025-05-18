const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const userText = input.value.trim();
  if (!userText) return;

  addMessage("You", userText);
  input.value = "";

  const reply = generateReply(userText.toLowerCase());
  addMessage("Zarify", reply);

  chatBox.scrollTop = chatBox.scrollHeight;
}

function addMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msgDiv);
}

function generateReply(text) {
  const responses = [
    { keywords: ["fail", "failed", "exam"], reply: "Don’t be discouraged! Learn from mistakes and keep trying." },
    { keywords: ["sad", "depressed", "lonely"], reply: "I’m here to listen. Would you like to talk more about it?" },
    { keywords: ["stress", "anxiety", "worried"], reply: "Try some breathing exercises. Need tips on managing stress?" },
    { keywords: ["help", "advice", "solution"], reply: "Tell me what you need help with, and I’ll do my best to assist." },
    { keywords: ["how are you"], reply: "I’m good! How about you?" },
    { keywords: ["angry", "mad", "frustrated"], reply: "It’s okay to feel upset sometimes. Want to talk about it?" },
    { keywords: ["happy", "good", "great"], reply: "Glad you’re feeling good! Keep it up." },
  ];

  for (const r of responses) {
    if (r.keywords.some(k => text.includes(k))) return r.reply;
  }

  if (text.endsWith("?")) {
    return "That’s a good question! I’m still learning, but I’ll try to help.";
  }

  return "Thanks for sharing. Keep expressing yourself!";
}
