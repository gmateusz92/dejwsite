
function setLanguage(lang) {
    // Hide all language elements
    document.querySelectorAll('.lang').forEach(el => el.classList.add('hidden'));
    // Show elements of selected language
    document.querySelectorAll(`.lang.${lang}`).forEach(el => el.classList.remove('hidden'));
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
