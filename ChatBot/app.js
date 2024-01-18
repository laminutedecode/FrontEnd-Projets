const sendBtn = document.querySelector('.chat-input .btn-msg');
const chatText = document.querySelector('.chat-input textarea');
const toggleBtn = document.querySelector('.toggle'); 
const chatbot = document.querySelector('.chatbot');
const closeModal = document.querySelector('.header-chatbot ion-icon');
const API_KEY = "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";

const inputHeight = chatText.scrollHeight;

let userMsg;

const createChatbot = (message, className) => {
    const chatLi = document.createElement('li');
    chatLi.classList.add('chat', className);
    let chatbotContent = className === "out" ? `<p></p>` : `<span>🤖</span><p></p>`; 
    chatLi.innerHTML = chatbotContent;
    chatLi.querySelector('p').textContent = message;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const msgElement = incomingChatLi.querySelector('p');

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{
                "role": "user",
                "content": userMsg
            }]
        })
    }

    fetch(API_URL, requestOptions)
        .then(res => res.json())
        .then(data => {
            if (data.choices && data.choices.length > 0) {
                msgElement.textContent = data.choices[0].message.content; 
            } else {
                msgElement.classList.add('error')
                msgElement.textContent = "Oups, il y a eu une erreur, veuillez réessayer plus tard !";
            }
            console.log(data);
        })
        .catch((error) => {
            msgElement.classList.add('error')
            msgElement.textContent = "Oups, il y a eu une erreur, veuillez réessayer plus tard !";
            console.log(error);
        })
        .finally(() => chatbot.scrollTo(0, chatbot.scrollHeight));
}

const handleChat = () => {
    userMsg = chatText.value.trim();

    if (!userMsg) return;
    chatText.value = "";
    chatText.style.height = `${inputHeight}px`
    chatbot.appendChild(createChatbot(userMsg, "out"));
    chatbot.scrollTo(0, chatbot.scrollHeight)

    setTimeout(() => {
        const incomingChatLi = createChatbot('Patientez...', 'robot');
        chatbot.appendChild(incomingChatLi);
        chatbot.scrollTo(0, chatbot.scrollHeight)

        generateResponse(incomingChatLi);
    }, 600);
};

chatText.addEventListener('input', () => {
    chatText.style.height = `${inputHeight}px`;
    chatText.style.height = `${chatText.scrollHeight}px`;
});

chatText.addEventListener('keydown', (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

toggleBtn.addEventListener('click', () => document.body.classList.toggle("active-chatbox"));

closeModal.addEventListener('click', () => {
    document.body.classList.remove("active-chatbox");
});

sendBtn.addEventListener('click', handleChat);
