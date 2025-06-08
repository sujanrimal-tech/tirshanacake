// Trishana Cake Bakery - script.js

document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatOptions = document.querySelector('.chat-options');

    if (chatToggle) {
        chatToggle.addEventListener('click', function() {
            chatOptions.classList.toggle('active');
        });
    }

    // Optional: Close chat options if clicking outside
    document.addEventListener('click', function(event) {
        if (!chatToggle.contains(event.target) && !chatOptions.contains(event.target)) {
            chatOptions.classList.remove('active');
        }
    });
});
