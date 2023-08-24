let apiUrl = "/api/chat";

function initChat() {
    let chatBar = document.getElementById('chatBar');
    let socket = new WebSocket(apiUrl);

    socket.onmessage = function(event) {
        let chatMessage = JSON.parse(event.data);
        let messageElement = document.createElement('p');
        messageElement.textContent = `${chatMessage.username}: ${chatMessage.message}`;
        chatBar.appendChild(messageElement);
    };

    chatBar.addEventListener('submit', function(event) {
        event.preventDefault();
        let messageInput = chatBar.querySelector('input[name="message"]');
        let usernameInput = chatBar.querySelector('input[name="username"]');
        let chatMessage = {
            username: usernameInput.value,
            message: messageInput.value,
            timestamp: new Date().toISOString()
        };
        socket.send(JSON.stringify(chatMessage));
        messageInput.value = '';
    });
}

window.onload = initChat;