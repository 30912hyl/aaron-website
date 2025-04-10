// script.js - CHECK IntersectionObserver rootMargin if needed

document.addEventListener('DOMContentLoaded', function() {

    // --- Copyright Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            const isVisible = primaryNav.getAttribute('data-visible') === 'true';
            navToggle.setAttribute('aria-expanded', !isVisible);
            primaryNav.setAttribute('data-visible', !isVisible);
            // Optional: Toggle body class for scroll prevention/styling
            // document.body.classList.toggle('nav-open', !isVisible);
        });

        // Close menu when a nav link is clicked
        primaryNav.querySelectorAll('a').forEach(link => {
            if (!link.target || link.target !== '_blank') { // Avoid closing for external links
                link.addEventListener('click', () => {
                    if (primaryNav.getAttribute('data-visible') === 'true') {
                        navToggle.setAttribute('aria-expanded', 'false');
                        primaryNav.setAttribute('data-visible', 'false');
                        // document.body.classList.remove('nav-open');
                    }
                });
            }
        });
    }

    // --- Active Nav Link Highlighting (Optional) ---
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('#primary-navigation li a');
     if (sections.length > 0 && navLinks.length > 0) {
        const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 60;
        const observerOptions = {
            root: null,
            // Adjusted rootMargin - test this value! Maybe less negative top needed?
            rootMargin: `-${headerHeight + 1}px 0px -40% 0px`,
            threshold: 0
        };
        // ... rest of IntersectionObserver logic ...
         const observer = new IntersectionObserver((entries) => {
            let currentActiveSectionId = null;
             // Find the topmost intersecting section within the bounds
             for (const entry of entries) {
                 if (entry.isIntersecting) {
                    currentActiveSectionId = entry.target.getAttribute('id');
                    break; // Prioritize the highest one visible
                 }
             }

             // If nothing is intersecting based on the margins,
             // check scroll position to guess the section. Less reliable.
             // Could also look at previous state...

             navLinks.forEach(link => {
                 link.classList.remove('active');
                 const linkHref = link.getAttribute('href');
                 if (currentActiveSectionId && linkHref && linkHref.endsWith(`#${currentActiveSectionId}`)) {
                     link.classList.add('active');
                 }
             });

        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    // --- Initialize AOS (If using) ---
    // if (typeof AOS !== 'undefined') { AOS.init({...}); }

}); // End of DOMContentLoaded