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
    
}); // End of DOMContentLoaded