function sendMessage() {
  const inputElement = document.getElementById("user-input");
  const input = inputElement.value.trim();
  if (input === "") return;

  addMessage("You", input);
  inputElement.value = "";

  const lowerInput = input.toLowerCase();

  const responses = [
    {
      keywords: ["fail", "failed", "exam", "test"],
      reply: "It's okay to fail. Every mistake is a step toward learning. What do you think went wrong?"
    },
    {
      keywords: ["sad", "depressed", "cry", "tears"],
      reply: "I'm really sorry you're feeling this way. Do you want to talk more about it?"
    },
    {
      keywords: ["stress", "anxiety", "overwhelmed"],
      reply: "You’re under a lot of pressure. It's okay to slow down. Want to walk through it together?"
    },
    {
      keywords: ["help", "advice", "solution"],
      reply: "I'm here to help. Can you tell me a bit more so I can give better advice?"
    },
    {
      keywords: ["how are you"],
      reply: "I'm doing well, thanks! I'm more interested in how YOU are."
    },
    {
      keywords: ["alone", "lonely"],
      reply: "I hear you. Feeling alone is hard. Want to share more about what you're going through?"
    },
    {
      keywords: ["angry", "mad", "furious"],
      reply: "Anger is valid. Let it out. I'm here to listen without judgment."
    },
    {
      keywords: ["confused", "lost", "stuck"],
      reply: "Let’s try to
