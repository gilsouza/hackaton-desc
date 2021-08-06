const mobile = document.getElementById('menu');

function toggleMenu() {
    const menu = document.getElementById('esconder')
    menu.classList.toggle('active')
    const hamburguer = document.getElementById('menu');
    hamburguer.classList.toggle('active')
}
mobile.addEventListener('click', toggleMenu);