var apiUrl = "/api/chat";

function initChat() {
    var chatBar = document.getElementById('chatBar');
    chatBar.addEventListener('submit', function(e) {
        e.preventDefault();
        var message = chatBar.querySelector('input').value;
        var username = 'User'; // Replace with actual username if needed
        var timestamp = new Date().toISOString();
        var chatMessage = {
            username: username,
            message: message,
            timestamp: timestamp
        };
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(chatMessage)
        }).then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to send message');
            }
        }).then(function(data) {
            console.log('Message sent', data);
        }).catch(function(error) {
            console.error('Error:', error);
        });
    });
}

window.addEventListener('DOMContentLoaded', initChat);