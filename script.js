const checkBtn = document.querySelector('#checkBtn');
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const aboutLink = document.querySelector('#aboutLink');
const ticketsLink = document.querySelector('#ticketsLink');
const header = document.querySelector('#header');

const ticket1 = document.querySelector('#ticket1');
const ticket2 = document.querySelector('#ticket2');
const ticket3 = document.querySelector('#ticket3');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const tickets = [
    ticket1,
    ticket2,
    ticket3
];



const rejectCookiesButton = document.querySelector('.reject-button');
const acceptCookiesButton = document.querySelector('.allow-button');
const cookiesContainer = document.querySelector('.cookies');

let currentTicketIndex = 0;
let firstTicketOnTop = true;
let opacityTimer = null;
let opacity = 100;
const fadeTimeInSec = 0.3;


let prevScroll = document.documentElement.scrollTop;


function toggleMenu() {
    menu.classList.toggle('showMenu');
    hamburger.classList.toggle('fa-xmark');
    hamburger.classList.toggle('fa-bars');
}

function goToSectionX() {
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

function changeOpacity() {
    opacity -= 10;

    if (opacity <= -10) {
        clearInterval(opacityTimer);
        firstTicketOnTop = !firstTicketOnTop;
        opacity = 100;
    } else if (firstTicketOnTop) {
        ticket1.style.opacity = `${opacity}%`;
        ticket2.style.opacity = `${100 - opacity}%`;
    } else {
        ticket2.style.opacity = `${opacity}%`;
        ticket1.style.opacity = `${100 - opacity}%`;
    }
}

function swapTickets(fadeOut, fadeIn) {
    const ticket1X = firstTicketOnTop ? ticket1 : ticket2;
    const ticket2X = firstTicketOnTop ? ticket2 : ticket1;

    ticket1X.setAttribute('src', tickets[fadeOut].url);
    ticket2X.setAttribute('src', tickets[fadeIn].url);

    opacityTimer = setInterval(changeOpacity, (fadeTimeInSec * 1000) / 10);

    console.log(ticket1X);
} 

function nextTicket() {
    if(currentTicketIndex + 1 > tickets.length -1) {
        currentTicketIndex = 0;
        swapTickets(tickets.length - 1, currentTicketIndex);
    } else {
        currentTicketIndex += 1;
        swapTickets(currentTicketIndex -1, currentTicketIndex);
    }

    console.log('next', currentTicketIndex);
} 

function prevTicket() {
    if (currentTicketIndex - 1 < 0) {
        currentTicketIndex = tickets.length -1;
    } else {
        currentTicketIndex -= 1;
        swapTickets(currentTicketIndex + 1, currentTicketIndex);
    }

    ticket1.setAttribute('src', tickets[currentTicketIndex].url);
    ticket1.setAttribute('alt', tickets[currentTicketIndex].url);

    console.log('prev', currentTicketIndex);
}


function init() {
    ticket1.setAttribute('src', tickets[0].url);
    ticket2.setAttribute('src', tickets[1].url);
}


function disableCookies() {
  cookiesContainer.remove();
}


checkBtn.addEventListener('change', toggleMenu); 
aboutLink.addEventListener('click', goToSectionX);
ticketsLink.addEventListener('click', goToSectionX);

prevBtn.addEventListener('click', prevTicket);
nextBtn.addEventListener('click', nextTicket);


rejectCookiesButton.addEventListener('click', disableCookies);
acceptCookiesButton.addEventListener('click', disableCookies);

init();




