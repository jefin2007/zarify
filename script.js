function sendMessage() {
    const input = document.getElementById("user-input").value.trim();
    if (input === "") return;

    addMessage("You", input);
    document.getElementById("user-input").value = "";

    const lowerInput = input.toLowerCase();

    const responses = [
        {
            keywords: ["sad", "upset", "depressed", "low", "unhappy", "down"],
            reply: "It's okay to feel sad sometimes. You're not alone, and I'm here for you."
        },
        {
            keywords: ["happy", "good", "excited", "joyful"],
            reply: "That's wonderful to hear! Keep spreading your happiness!"
        },
        {
            keywords: ["fail", "failure", "useless", "rejected", "didn't", "not pass", "test", "exam", "football"],
            reply: "It's okay to fail sometimes — it's part of learning and growing. You're still valuable and capable!"
        },
        {
            keywords: ["anxious", "anxiety", "stress", "worried", "overwhelmed"],
            reply: "Take a deep breath. You're doing your best, and that's more than enough. One step at a time."
        },
        {
            keywords: ["cry", "tears", "broke down", "emotional"],
            reply: "Crying shows you're strong enough to feel. It's perfectly human. I'm here with you."
        },
        {
            keywords: ["angry", "mad", "furious", "frustrated"],
            reply: "It's okay to feel anger. Try to breathe and let it out slowly. You matter."
        },
        {
            keywords: ["alone", "lonely", "nobody", "isolated"],
            reply: "You are not alone, even if it feels that way. I'm here, and so are others who care."
        },
        {
            keywords: ["love", "heart", "crush", "relationship"],
            reply: "Love can be beautiful and painful. Be kind to yourself — you deserve respect and care."
        },
        {
            keywords: ["how are you", "how r u", "how do you feel"],
            reply: "I'm here and always ready to listen. How are *you* feeling today?"
        },
        {
            keywords: ["thanks", "thank you", "grateful"],
            reply: "You're welcome. I'm always here if you need someone to talk to."
        },
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
        addMessage("Zarify", "I'm here for you. Feel free to tell me more whenever you're ready.");
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
