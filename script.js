function sendMessage() {
    const input = document.getElementById("user-input").value.trim();
    if (input === "") return;

    addMessage("You", input);
    document.getElementById("user-input").value = "";

    const lowerInput = input.toLowerCase();

    const responses = [
        {
            keywords: ["fail", "failed", "test", "exam"],
            reply: "It's okay to fail. Try understanding what went wrong, and give yourself another chance. Growth comes from failure."
        },
        {
            keywords: ["stress", "stressed", "pressure"],
            reply: "Take a deep breath. Break your task into small parts, and handle one at a time. You're doing better than you think."
        },
        {
            keywords: ["confused", "lost"],
            reply: "Feeling confused is normal. Try writing down your thoughts or talk to someone who listens well."
        },
        {
            keywords: ["how are you"],
            reply: "I'm doing well, thank you. But this is about *you* — how are *you* feeling today?"
        },
        {
            keywords: ["sad", "depressed"],
            reply: "I'm really sorry you're feeling this way. Talk to someone you trust. You're not alone."
        },
        {
            keywords: ["solution", "advice", "what should i do"],
            reply: "Let’s break your situation down. What exactly are you dealing with right now?"
        }
    ];

    let found = false;
    for (let r of responses) {
        if (r.keywords.some(k => lowerInput.includes(k))) {
            addMessage("Zarify", r.reply);
            found = true;
            break;
        }
    }

    if (!found) {
        addMessage("Zarify", "I'm here to listen. Can you tell me a bit more?");
    }
}

function addMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
