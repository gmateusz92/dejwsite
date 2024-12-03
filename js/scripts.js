
function setLanguage(lang) {
    // Hide all language elements
    document.querySelectorAll('.lang').forEach(el => el.classList.add('hidden'));
    // Show elements of selected language
    document.querySelectorAll(`.lang.${lang}`).forEach(el => el.classList.remove('hidden'));
}

// Modal functionality
function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}



