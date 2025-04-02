// script.js

// Wait for the HTML document to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', function() {

    // --- Copyright Year ---
    // Find the span with the ID 'current-year'
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) { // Check if the element actually exists
        // Set its text content to the current year
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Add other functions below ---
    
    // --- Initialize AOS (Animate On Scroll) ---
    // Make sure AOS library script is loaded before this runs
    if (typeof AOS !== 'undefined') { // Check if AOS is loaded
        AOS.init({
            duration: 800, // values from 400 to 3000, with step 50ms
            easing: 'ease-in-out', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }
}); // End of DOMContentLoaded
