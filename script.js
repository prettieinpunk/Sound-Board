const sounds = ['polite meow', 'cranky meow', 'alien meow', 'complaining meow', 'petite meow', 'purr meow'];

// Create buttons for each sound
sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    // Play sound & c