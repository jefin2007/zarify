function sendMessage() {
  const input = document.getElementById('userInput').value.toLowerCase().trim();
  if (!input) return;

  addMessage('You: ' + input, 'user');
  document.getElementById('userInput').value = '';

  const responses = [
    {
      keywords: ['fail', 'failed', 'mistake', 'error', 'lost', 'wrong'],
      reply: "Everyone makes mistakes. Reflect on what happened, learn from it, and keep pushing forward."
    },
    {
      keywords: ['sad', 'depressed', 'unhappy', 'down', 'bad'],
      reply: "I'm sorry you're feeling that way. Remember, it's okay to feel down sometimes. Try talking to someone you trust."
    },
    {
      keywords: ['happy', 'good', 'great', 'awesome', 'nice'],
      reply: "That's wonderful! Keep that positive energy going!"
    },
    {
      keywords: ['stress', 'anxiety', 'nervous', 'worried', 'pressure'],
      reply: "Take deep breaths and break your problems into small steps. You can handle this one step at a time."
    },
    {
      keywords: ['football', 'game', 'sports'],
      reply: "Sports teach us great lessons about teamwork and perseverance. Keep practicing and don't give up!"
    },
    {
      keywords: ['study', 'learn', 'bio', 'engineering', 'school', 'college'],
      reply: "Focus and steady effort are key. Set small goals, and reward yourself when you achieve them."
    },
    {
      keywords: ['love', 'crush', 'relationship', 'heart'],
      reply: "Matters of the heart can be complex. Be honest and patient with yourself and others."
    },
    {
      keywords: ['help', 'advice', 'solution', 'problem', 'support'],
      reply: "I'm here to listen. Can you tell me more about what's troubling you?"
    },
    {
      keywords: ['hello', 'hi', 'hey'],
      reply: "Hello! How are you feeling today?"
    }
  ];

  let matched = false;
  for (const item of responses) {
    for (const keyword of item.keywords) {
      if (input.includes(keyword)) {
        addMessage('Zarify: ' + item.reply, 'bot');
        matched = true;
        break;
      }
    }
    if (matched) break;
  }

  if (!matched) {
    addMessage('Zarify: Thank you for sharing. Keep expressing yourself!', 'bot');
  }
}

function addMessage(text, sender) {
  const chat = document.getElementById('chat');
  const message = document.createElement('div');
  message.className = sender === 'user' ? 'user-message' : 'bot-message';
  message.textContent = text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}
