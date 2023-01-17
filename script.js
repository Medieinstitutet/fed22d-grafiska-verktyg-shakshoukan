const checkBtn = document.querySelector('#checkBtn');
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const aboutLink = document.querySelector('#aboutLink');
const ticketsLink = document.querySelector('#ticketsLink');
const header = document.querySelector('#header');

let prevScroll = document.documentElement.scrollTop;


function toggleMenu() {
    menu.classList.toggle('showMenu');
    hamburger.classList.toggle('fa-xmark');
    hamburger.classList.toggle('fa-bars');
}

// TODO: Dem här två funktionerna innehåller samma sak,
// går det att skriva ihop på något sätt?
function goToSection2() {
    menu.classList.toggle('showMenu');
    hamburger.classList.toggle('fa-xmark');
    hamburger.classList.toggle('fa-bars');
}

function goToSection3() {
    menu.classList.toggle('showMenu');
    hamburger.classList.toggle('fa-xmark');
    hamburger.classList.toggle('fa-bars');
} 

window.onscroll = function() {
    let currentScroll = document.documentElement.scrollTop;
    if (prevScroll > currentScroll) {
        header.classList.remove('hide');
    } else {
        header.classList.add('hide');
    }
    prevScroll = currentScroll;
}


checkBtn.addEventListener('change', toggleMenu); 
aboutLink.addEventListener('click', goToSection2);
ticketsLink.addEventListener('click', goToSection3);

const rejectCookiesButton = document.querySelector('.reject-button');
const acceptCookiesButton = document.querySelector('.allow-button');
const cookiesContainer = document.querySelector('.cookies');

rejectCookiesButton.addEventListener('click', disableCookies);
acceptCookiesButton.addEventListener('click', disableCookies);

function disableCookies() {
  cookiesContainer.remove();
}



