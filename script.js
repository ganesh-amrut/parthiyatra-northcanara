document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const routesLink = document.getElementById('routes-link');
    const bookingsLink = document.getElementById('bookings-link');
    const devoteesLink = document.getElementById('devotees-link');
    const contentContainer = document.getElementById('content');

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('home.html');
    });

    routesLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('routes.html');
    });

    bookingsLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('bookings.html');
    });

    devoteesLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('devotees.html');
    });

    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                contentContainer.innerHTML = html;
            })
            .catch(error => console.error('Error loading content:', error));
    }
});
