const sounds = ['polite meow', 'cranky meow', 'alien meow', 'complaining meow', 'petite meow', 'purr meow'];

// Create buttons for each sound
sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    // Play sound & create floating paw on click
    btn.addEventListener('click', (e) => {
        stopSounds();
        const audio = document.getElementById(sound);
        if (audio) audio.play(); // Ensure the sound exists

        // Create paw particle effect at click position
        createParticle(e.clientX, e.clientY);
    });

    document.getElementById('buttons').appendChild(btn);
});

// Stop all sounds before playing a new one
function stopSounds() {
    sounds.forEach((sound) => {
        const snd = document.getElementById(sound);
        if (snd) {
            snd.pause();
            snd.currentTime = 0;
        }
    });
}

// Floating paw print effect
function createParticle(x, y) {
    const particle = document.createElement('img');
    particle.src = 'paw.gif'; // Make sure this file exists
    particle.classList.add('particle');
    document.body.appendChild(particle);
    
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    setTimeout(() => particle.remove(), 1000);
}
