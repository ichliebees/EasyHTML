document.addEventListener("DOMContentLoaded", function() {
  const textElements = document.querySelectorAll('text');
  textElements.forEach(function(textElement) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = textElement.innerHTML;
    textElement.parentNode.replaceChild(cardElement, textElement);
  });

  const textSmallElements = document.querySelectorAll('text-small');
  textSmallElements.forEach(function(textSmallElement) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card'); 
    cardElement.innerHTML = textSmallElement.innerHTML;
    textSmallElement.parentNode.replaceChild(cardElement, textSmallElement);
  });

  const inElements = document.querySelectorAll('in');
  inElements.forEach(function(inElement) {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', 'Enter text...');
    inputElement.classList.add('custom-input');
    inElement.parentNode.replaceChild(inputElement, inElement);
  });

  const spaceElements = document.querySelectorAll('space');
  spaceElements.forEach(function(spaceElement) {
    const space = document.createElement('div');
    space.classList.add('space');
    spaceElement.parentNode.insertBefore(space, spaceElement);
  });

  const btnElements = document.querySelectorAll('btn');
  btnElements.forEach(function(btnElement) {
    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = btnElement.innerHTML;
    buttonElement.classList.add('custom-btn'); 
    btnElement.parentNode.replaceChild(buttonElement, btnElement);
  });

  const navbarElement = document.querySelector('navbar');
  navbarElement.classList.add('navbar');
});

document.addEventListener("DOMContentLoaded", function() {
  const boxElements = document.querySelectorAll('box');
  boxElements.forEach(function(boxElement) {
    boxElement.classList.add('box');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const footerElement = document.querySelector('footer');
  if (footerElement) {
    footerElement.classList.add('custom-footer');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const footerLinkElements = document.querySelectorAll('footer-link');
  footerLinkElements.forEach(function(footerLinkElement) {
    footerLinkElement.classList.add('custom-footer-link');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const checkboxElements = document.querySelectorAll('checkbox');
  checkboxElements.forEach(function(checkboxElement) {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'checkbox');
    inputElement.classList.add('custom-chk');
    checkboxElement.parentNode.replaceChild(inputElement, checkboxElement);
  });
});


