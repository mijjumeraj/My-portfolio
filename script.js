// Function 1: Contact Form Submission Handling (Simulated Success)
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple check to prevent multiple messages
    if (document.querySelector('.success-message')) {
        return; 
    }

    // --- NOTE: FOR A REAL WEBSITE, INTEGRATE A BACKEND/SERVICE LIKE FORMSPREE HERE ---
    
    const msg = document.createElement('p');
    msg.innerText = 'Thank you, Merajuddin! Your message has been sent successfully.';
    
    // Add class for CSS styling
    msg.classList.add('success-message'); 
    
    form.appendChild(msg);
    form.reset();
    
    // Remove message after 5 seconds
    setTimeout(() => msg.remove(), 5000);
});

// Function 2: Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
             targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Function 3: Scroll Animation (Intersection Observer)
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.2, // Start animation when 20% of section is visible
    rootMargin: "0px 0px -50px 0px" // Slight offset
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        // Class name updated to match CSS: 'is-visible'
        entry.target.classList.add('is-visible'); 
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


// Function 4: Dark/Light Mode Toggle with Local Storage
const toggleBtn = document.getElementById('theme-toggle');

// Helper function to apply theme based on state
function applyTheme(theme) {
    const isDark = (theme === 'dark');
    document.body.classList.toggle('dark-mode', isDark);
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
}

// 1. Check local storage on initial load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    // Default to light mode if nothing is saved
    applyTheme('light'); 
}

// 2. Add event listener to toggle and save
toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    const newTheme = isDark ? 'dark' : 'light';
    
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});