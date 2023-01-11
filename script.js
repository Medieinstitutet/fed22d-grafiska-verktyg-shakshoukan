// import './style/style.scss';

// Om möjligt, lägg alla variabler längst upp, så har vi ordning direkt


const checkBtn = document.querySelector('#checkBtn');
const menu = document.querySelector('#menu');

function toggleMenu() {
    menu.classList.toggle('showMenu');
}
console.log(menu);

checkBtn.addEventListener('change', toggleMenu); 


