const rejectCookiesButton = document.querySelector('.reject-button');
const acceptCookiesButton = document.querySelector('.allow-button');
const cookiesContainer = document.querySelector('.cookies');

rejectCookiesButton.addEventListener('click', disableCookies);
acceptCookiesButton.addEventListener('click', disableCookies);

function disableCookies() {
  cookiesContainer.remove();
}
