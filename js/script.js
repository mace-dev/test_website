document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('button'); // Your button
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');
    const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');

    // Check if dark mode is already enabled
    if (document.body.classList.contains('dark-mode')) {
        darkModeStylesheet.removeAttribute('disabled');
        moonIcon.style.display = 'none'; // Hide moon icon
        sunIcon.style.display = 'inline'; // Show sun icon
    }

    toggleButton.addEventListener('click', () => {
        // Toggle dark mode
        if (document.body.classList.toggle('dark-mode')) {
            darkModeStylesheet.removeAttribute('disabled');
            moonIcon.style.display = 'none'; // Hide moon icon
            sunIcon.style.display = 'inline'; // Show sun icon
        } else {
            darkModeStylesheet.setAttribute('disabled', 'true');
            moonIcon.style.display = 'inline'; // Show moon icon
            sunIcon.style.display = 'none'; // Hide sun icon
        }
    });
});
