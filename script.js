function sendMessage() {
    const input = document.getElementById("user-input").value.trim();
    if (input === "") return;

    addMessage("You", input);
    document.getElementById("user-input").value = "";

    const lowerInput = input.toLowerCase();

    const responses = [
        {
            keywords: ["fail", "failed", "exam", "test"],
            reply: "It's okay to fail sometimes. What matters is that you learn from it and try again. Want to talk about what went wrong?"
        },
        {
            keywords: ["sad", "depressed", "upset", "cry"],
            reply: "I'm here for you. It's okay to feel sad. Do you want to share what’s making you feel this way?"
        },
        {
            keywords: ["stress", "stressed", "pressure", "anxiety"],
            reply: "You're under pressure, and that’s hard. Try to breathe, take one step at a time. I'm here to talk through it."
        },
        {
            keywords: ["confused", "lost", "don't know", "what to do"],
            reply: "Let’s take a deep breath together. Can you describe what’s confusing you? I’ll try to help break it down."
        },
        {
            keywords: ["advice", "solution", "help me"],
            reply: "Sure! Tell me what you're facing, and I’ll try to suggest something helpful."
        },
        {
            keywords: ["how are you"],
            reply: "I'm doing well, thank you for asking. But I'm more interested in how YOU feel today."
        },
        {
            keywords: ["alone", "lonely"],
            reply: "You're not alone. I’m here to listen. Want to tell me what’s been going on?"
        },
        {
            keywords: ["angry", "mad", "frustrated"],
            reply: "Anger shows you care deeply about something. Want to tell me what’s making you feel this way?"
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
        addMessage("Zarify", "I’m here to listen. Tell me more so I can understand better.");
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
