'use strict';

const email = document.getElementById('emails');
const password = document.getElementById('passwordInput');
console.log(email);
console.log(password);

const logIn = document.querySelector('.button-login');

const userName = {
  email: 'dikegodstime@gmail.com',
  passcode: 'psalm23',
};
function redirect() {
  window.location.assign('mainpage.html');
}
logIn.addEventListener('click', function (e) {
  e.preventDefault();
  if (email.value === userName.email && password.value === userName.passcode) {
    redirect();
  } else {
    console.log('Invalid credentials');
  }
});
