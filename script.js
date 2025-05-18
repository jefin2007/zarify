function sendMessage() {
  const inputElement = document.getElementById("user-input");
  const input = inputElement.value.trim();
  if (input === "") return;

  addMessage("You", input);
  inputElement.value = "";

  const lowerInput = input.toLowerCase();

  const responses = [
    {
      keywords: ["fail", "failed", "exam", "test", "score"],
      reply: "Failing is tough but it’s just a step. Try to find what didn’t work and learn from it. Need tips on studying?"
    },
    {
      keywords: ["sad", "depressed", "unhappy", "cry", "lonely", "alone"],
      reply: "I’m sorry you’re feeling this way. It’s okay to feel sad sometimes. Talking helps. Want to share what’s on your mind?"
    },
    {
      keywords: ["stress", "anxiety", "worried", "overwhelmed", "nervous"],
      reply: "Stress can be heavy. Try deep breathing or short breaks. Want me to share some quick relaxation tips?"
    },
    {
      keywords: ["help", "advice", "solution", "guide", "tips"],
      reply: "Sure! Tell me what you want help with specifically, and I’ll do my best to guide you."
    },
    {
      keywords: ["how are you", "what’s up", "how do you do"],
      reply: "I’m doing well, thanks! How about you? I’m here to listen."
    },
    {
      keywords: ["angry", "mad", "frustrated", "upset"],
      reply: "Feeling angry is normal. Try to breathe and maybe talk about what’s bothering you?"
    },
    {
      keywords: ["confused", "lost", "stuck", "uncertain"],
      reply: "It’s okay to feel lost sometimes. Let’s figure it out step by step. What’s confusing you?"
    },
    {
      keywords: ["happy", "good", "great", "awesome", "fine"],
      reply: "Glad to hear that! Keep the positive vibes flowing. Anything exciting happening?"
    }
  ];

  const isQuestion = input.endsWith("?");

  let matched = false;
  for (let r of responses) {
    if (r.keywords.some(k => lowerInput.includes(k))) {
      addMessage("Zarify", r.reply);
      matched = true;
      break;
    }
  }

  if (!matched) {
    if (isQuestion) {
      addMessage("Zarify", "That’s an interesting question! I’m still learning but I’ll try to help. Could you tell me more?");
    } else {
      addMessage("Zarify", "Thanks for sharing. Keep expressing yourself and I’m here to listen!");
    }
  }
}

function addMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = "message";
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
