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

let middleTicketOnTop = true;

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


/* function swapTickets() {
    const ticket1X = middleTicketOnTop ? ticket1 : ticket2;
    const ticket2X = middleTicketOnTop ? ticket2 : ticket1;

    
} */

/* function nextTicket() {
    if(currentTicketIndex + 1 > tickets.length -1) {
        currentTicketIndex = 0;

    }
} */


function disableCookies() {
  cookiesContainer.remove();
}


checkBtn.addEventListener('change', toggleMenu); 
aboutLink.addEventListener('click', goToSectionX);
ticketsLink.addEventListener('click', goToSectionX);

//prevBtn.addEventListener('click', prevTicket);
//extBtn.addEventListener('click', nextTicket);


rejectCookiesButton.addEventListener('click', disableCookies);
acceptCookiesButton.addEventListener('click', disableCookies);




