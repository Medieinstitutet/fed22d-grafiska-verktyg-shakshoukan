const checkBtn = document.querySelector('#checkBtn');
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const aboutLink = document.querySelector('#aboutLink');
const ticketsLink = document.querySelector('#ticketsLink');
const header = document.querySelector('#header');

//const dot1 = document.querySelector('#dot1');
//const dot2 = document.querySelector('#dot2');
//const dot3 = document.querySelector('#dot3');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const rejectCookiesButton = document.querySelector('.reject-button');
const acceptCookiesButton = document.querySelector('.allow-button');
const cookiesContainer = document.querySelector('.cookies');

let prevScroll = document.documentElement.scrollTop;


function toggleMenu() {
    menu.classList.toggle('showMenu');
    hamburger.classList.toggle('fa-xmark');
    hamburger.classList.toggle('fa-bars');
};

function goToSectionX() {
    menu.classList.toggle('showMenu');
    hamburger.classList.toggle('fa-xmark');
    hamburger.classList.toggle('fa-bars');
};

window.onscroll = function() {
    let currentScroll = document.documentElement.scrollTop;
    if (prevScroll > currentScroll) {
        header.classList.remove('hide');
    } else {
        header.classList.add('hide');
    }
    prevScroll = currentScroll;
};


function prevTicket() {
    document.getElementById('ticketCards').scrollLeft += -400;
};

function nextTicket() {
    document.getElementById('ticketCards').scrollLeft += 400;
};

function disableCookies() {
  cookiesContainer.remove();
};


checkBtn.addEventListener('change', toggleMenu); 
aboutLink.addEventListener('click', goToSectionX);
ticketsLink.addEventListener('click', goToSectionX);

prevBtn.addEventListener('click', prevTicket);
nextBtn.addEventListener('click', nextTicket);

rejectCookiesButton.addEventListener('click', disableCookies);
acceptCookiesButton.addEventListener('click', disableCookies);






