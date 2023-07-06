document.addEventListener('DOMContentLoaded', init);

function init() {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection.classList.add('dark-theme');

    initChat();
}