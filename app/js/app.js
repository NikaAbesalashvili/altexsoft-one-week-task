const burgerIcon = document.getElementById('burger-menu-icon')
const burgerMenu = document.getElementById('burger-menu')

burgerIcon.addEventListener('click', () => {
    if(burgerIcon.classList.contains('fa-bars')) {
        burgerIcon.className = 'fas fa-times';
        burgerMenu.style.display = 'flex';
    } else {
        burgerIcon.className = 'fas fa-bars';
        burgerMenu.style.display = 'none';
    }
});
