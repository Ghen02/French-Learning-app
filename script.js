// script.js

// Track link clicks
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[target="_blank"]');
    
    links.forEach(link => {
        link.addEventListener('click', function () {
            // Perform any additional actions here if needed
            console.log(`Link clicked: ${link.href}`);
        });
    });
});
