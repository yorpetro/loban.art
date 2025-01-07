document.addEventListener('DOMContentLoaded', () => {
    // Get the "No" button and the container element
    const noButton = document.getElementById('noButton');
    const containerCard = document.querySelector('.container');

    // Add an event listener to the "No" button for the click event
    noButton.addEventListener('click', () => {
        moveButtonRandom(noButton, containerCard);
    });

    function moveButtonRandom(button, container) {
        // Get the viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Get the container's boundaries
        const containerRect = container.getBoundingClientRect();
        const containerLeft = containerRect.left;
        const containerRight = containerRect.right;
        const containerTop = containerRect.top;
        const containerBottom = containerRect.bottom;

        let newLeft, newTop;

        // Generate new random positions outside the container
        do {
            newLeft = Math.random() * viewportWidth; // Random position along the x-axis
            newTop = Math.random() * viewportHeight; // Random position along the y-axis
        } while (
            // Ensure the new position is OUTSIDE the container
        newLeft > containerLeft - button.offsetWidth &&
        newLeft < containerRight &&
        newTop > containerTop - button.offsetHeight &&
        newTop < containerBottom
            );

        // Ensure the button doesn't go offscreen
        newLeft = Math.max(10, Math.min(newLeft, viewportWidth - button.offsetWidth - 10));
        newTop = Math.max(10, Math.min(newTop, viewportHeight - button.offsetHeight - 10));

        // Apply the new position to the button
        button.style.position = 'absolute';
        button.style.left = `${newLeft}px`;
        button.style.top = `${newTop}px`;
    }
});