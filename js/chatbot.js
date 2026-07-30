/* ==========================================================
   StartTour - chatbot.js
========================================================== */

const destinos = {
    "tóquio": {
        dias: 7,
        preco: "R$ 13.990",
        descricao: "Conheça Shibuya, Akihabara, Tokyo Tower, templos e a incrível gastronomia japonesa."
    },

    "tokyo": {
        dias: 7,
        preco: "R$ 13.990",
        descricao: "Conheça Shibuya, Akihabara, Tokyo Tower, templos e a incrível gastronomia japonesa."
    },

    "kyoto": {
        dias: 6,
        preco: "R$ 11.990",
        descricao: "Templos históricos, jardins, cultura tradicional e bairros antigos."
    },

    "osaka": {
        dias: 6,
        preco: "R$ 10.990",
        descricao: "Vida noturna, gastronomia e castelos históricos."
    },

    "hokkaido": {
        dias: 8,
        preco: "R$ 15.490",
        descricao: "Paisagens naturais, neve, estações de esqui e águas termais."
    },

    "okinawa": {
        dias: 7,
        preco: "R$ 12.790",
        descricao: "Praias paradisíacas, mergulho e clima tropical."
    }
};

const chatBody = document.getElementById("chatBody");
const input = document.getElementById("chatInput");
const send = document.getElementById("sendMessage");

function addMessage(text, sender = "bot") {

    const div = document.createElement("div");

    div.className = sender;

    div.style.marginBottom = "15px";

    div.style.padding = "12px";

    div.style.borderRadius = "12px";

    div.style.lineHeight = "1.5";

    div.style.background =
        sender === "bot"
            ? "#1e293b"
            : "#dc2626";

    div.innerHTML = text;

    chatBody.appendChild(div);

    chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(message) {

    message = message.toLowerCase();

    if (
        message.includes("oi") ||
        message.includes("olá") ||
        message.includes("ola")
    ) {

        return `
👋 Olá!

Seja bem-vindo à <b>StartTour</b>.

Posso ajudá-lo com nossos pacotes para:

🇯🇵 Tóquio
🏯 Kyoto
🌆 Osaka
❄️ Hokkaido
🏝 Okinawa

Qual destino você deseja conhecer?
`;

    }

    for (let destino in destinos) {

        if (message.includes(destino)) {

            const d = destinos[destino];

            return `
<h3>${destino.toUpperCase()}</h3>

📅 ${d.dias} dias

💴 ${d.preco}

📍 ${d.descricao}

Deseja realizar uma reserva?
`;

        }

    }

    if (
        message.includes("preço") ||
        message.includes("valor") ||
        message.includes("quanto")
    ) {

        return `
Pacotes disponíveis:

🇯🇵 Tóquio — R$ 13.990

🏯 Kyoto — R$ 11.990

🌆 Osaka — R$ 10.990

❄️ Hokkaido — R$ 15.490

🏝 Okinawa — R$ 12.790
`;

    }

    if (
        message.includes("obrigado") ||
        message.includes("valeu")
    ) {

        return "😊 Foi um prazer ajudá-lo! Esperamos vê-lo em breve na StartTour.";

    }

    return `
Desculpe.

Sou especializado apenas nos pacotes turísticos da StartTour.

Posso fornecer informações sobre:

• Destinos

• Preços

• Duração das viagens

• Atrações incluídas
`;

}

function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    input.value = "";

    setTimeout(() => {

        addMessage(botReply(text));

    }, 500);

}

send.addEventListener("click", sendMessage);

input.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        sendMessage();

    }

});

window.addEventListener("load", () => {

    addMessage(`
👋 Bem-vindo à <b>StartTour</b>!

Estou pronto para ajudá-lo a encontrar sua próxima viagem.

Digite o nome de um destino ou pergunte pelos preços.
`);

});