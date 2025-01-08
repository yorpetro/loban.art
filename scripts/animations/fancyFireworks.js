document.addEventListener('DOMContentLoaded', () => {
    // Select the container element for fireworks
    const container = document.querySelector('.fireworks');

    // Create the Fireworks object (with options, if any)
    const fireworks = new Fireworks.default(container, {
        autoresize: false, // Adjust canvas size automatically
        opacity: 0.5, // Set the opacity of the fireworks
        acceleration: 1.05, // How fast particles accelerate
        friction: 0.98, // Friction slowing down particles
        gravity: 1, // Gravity effect
        particles: 150, // Number of particles per explosion
        trace: 3, // Number of visible particle traces
        explosion: 5, // Explosion radius
        boundaries: { // Stay within these bounds
            x: 50,
            y: 50,
            width: container.offsetWidth,
            height: container.offsetHeight,
        },
        sound: {
            enabled: true, // Play sound
            files: [
                'https://fireworks.js.org/sounds/explosion0.mp3',
                'https://fireworks.js.org/sounds/explosion1.mp3',
                'https://fireworks.js.org/sounds/explosion2.mp3',
            ],
            volume: { min: 4, max: 8 },
        }
    });

    // Add a click event listener to the "Yes" button
    const yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', () => {
        // Start fireworks when "Yes" is clicked
        fireworks.start();

        // Stop fireworks after 5 seconds
        setTimeout(() => {
            fireworks.stop();
        }, 5000);
    });
});