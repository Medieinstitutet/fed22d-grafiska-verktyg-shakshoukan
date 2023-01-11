import './style/style.scss';

// Om möjligt, lägg alla variabler längst upp, så har vi ordning direkt
console.log('hej');

const checkBtn = document.querySelector('#checkBtn');
const menu = document.querySelector('#menu');

function toggleMenu() {
    if (checkbox.checked) {
        menu.classList.toggle('showMenu');
    }
}


checkBtn.addEventListener('change', toggleMenu); 


