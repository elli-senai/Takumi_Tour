/* ==========================================================
   StartTour - chatbot.js (Versão Udify Integrado)
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const toggleChat = document.getElementById("toggleChat");
    const closeChat = document.getElementById("closeChat");
    const chatWindow = document.getElementById("chatWindow");

    if (toggleChat && closeChat && chatWindow) {
        // Abrir / Fechar a janela do chat ao clicar no botão flutuante
        toggleChat.addEventListener("click", () => {
            chatWindow.classList.toggle("hidden");
        });

        // Fechar a janela ao clicar no X do cabeçalho
        closeChat.addEventListener("click", () => {
            chatWindow.classList.add("hidden");
        });
    }
});