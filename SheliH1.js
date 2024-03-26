function showLove() {
    const messageElement = document.querySelector('.message');
    const teddyBearContainerElement = document.querySelector('.teddy-bear-container');
    const teddyBearElement = document.querySelector('.teddy-bear');
    const bodyElement = document.querySelector('body');
    const noButtonElement = document.querySelector('.no-button');

    messageElement.textContent = 'Nami Ngiyakuthanda❤️!';
    teddyBearElement.src = 'bear-giving-kiss-you.gif';
    noButtonElement.classList.add('locked');

    const heartElements = createHearts(10);
    heartElements.forEach(heart => {
        messageElement.appendChild(heart);
        heart.style.animationDelay = `${Math.random() * 2}s`;
    });
}

function createHearts(count) {
    const hearts = [];
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('span');
        heart.textContent = '❤️';
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 80}%`;
        hearts.push(heart);
    }
    return hearts;
}

function showHate() {
    const noButtonElement = document.querySelector('.no-button');
    if (!noButtonElement.classList.contains('locked')) {
        noButtonElement.style.transition = 'transform 0.4s ease, opacity 0.1s ease';
        noButtonElement.style.transform = 'scale(0)';
        noButtonElement.style.opacity = '0';

        // Set a timeout to fade in the button after 2 seconds
        setTimeout(() => {
            noButtonElement.style.transform = 'scale(1)';
            noButtonElement.style.opacity = '1';
        }, 2000);
    }
}

