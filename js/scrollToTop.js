const scrollButton = document.querySelector('#scrollToTopBtn');

window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight) {
        scrollButton.classList.add('top-link--visible');
    } else {
        scrollButton.classList.remove('top-link--visible');
    }
});