let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://cdn.glitch.me/97867425-87d2-4d15-92b3-83a180b7c433%2FFirefox-web-browser-logo.png?v=1638102117830') {
      myImage.setAttribute('src','https://cdn.glitch.me/97867425-87d2-4d15-92b3-83a180b7c433%2Ffirefox-icon.png?v=1638101140442');
    } else {
      myImage.setAttribute('src','https://cdn.glitch.me/97867425-87d2-4d15-92b3-83a180b7c433%2FFirefox-web-browser-logo.png?v=1638102117830');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
/*
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
*/
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
