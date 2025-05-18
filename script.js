function sendMessage() {
    const input = document.getElementById("user-input").value.trim();
    if (input === "") return;

    addMessage("You", input);
    document.getElementById("user-input").value = "";

    const lowerInput = input.toLowerCase();

    const responses = [
        {
            keywords: ["failed", "fail", "exam", "test", "football"],
            reply: "Failing is just one step in the journey. Try to review what went wrong, make a new plan, and give it another go. You’ve got this!"
        },
        {
            keywords: ["stress", "stressed", "pressure", "overwhelmed"],
            reply: "Take a 5-minute break, breathe deeply, and write down what’s overwhelming you. One small step at a time makes things easier."
        },
        {
            keywords: ["confused", "don't know", "lost", "what to do"],
            reply: "It’s okay to be confused. Try listing your thoughts in a notebook — it can help you see things more clearly."
        },
        {
            keywords: ["sad", "depressed", "lonely", "alone"],
            reply: "You’re not alone, and your feelings matter. Talk to someone you trust, or try writing a journal — even small steps can lift your mood."
        },
        {
            keywords: ["how are you", "how r u", "how do you feel"],
            reply: "I'm always here for you. But more importantly — how are *you* feeling?"
        },
        {
            keywords: ["love", "crush", "heartbreak", "relationship"],
            reply: "Love can hurt sometimes. Focus on loving yourself first — your worth doesn’t depend on others."
        },
        {
            keywords: ["thank you", "thanks", "grateful"],
            reply: "You’re always welcome. I’m here anytime you need to talk."
        },
        {
            keywords: ["solution", "what should i do", "give me advice", "help me"],
            reply: "Sure — can you tell me a bit more about what you're facing? I'll do my best to help."
        },
        {
            keywords: ["angry", "mad", "irritated"],
            reply: "Anger is a natural emotion. Try to take a break, drink some water, or listen to calming music — it can help you cool down."
        }
    ];

    let matched = false;
    for (let item of responses) {
        for (let keyword of item.keywords) {
            if (lowerInput.includes(keyword)) {
                addMessage("Zarify", item.reply);
                matched = true;
                break;
            }
        }
        if (matched) break;
    }

    if (!matched) {
        addMessage("Zarify", "Tell me more — I'm listening and ready to help however I can.");
    }
}

function addMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
