const openMenu = getElement('.text-editor--header-open-menu');
const closeMenu = getElement('.text-editor--header-close-menu');
const mainMenu = getElement('.text-editor--header-main-menu');
const boldText = getElement('.bold-txt');
const italicText = getElement('.italic-txt');
const underlineText = getElement('.underline-txt');
const textBox = getElement('#input-text');
console.log(italicText)
addListener(openMenu, 'click', function () {
    mainMenu.style.left = 0;
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
})


addListener(closeMenu, 'click', function () {
    mainMenu.style.left = '-100%';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
})

addListener(boldText, 'click',function () {
    boldText.style.backgroundColor = 'black';
    boldText.style.color = 'white';
    textBox.style.fontWeight = '900';

})

addListener(italicText, 'click',function () {
    italicText.style.backgroundColor = 'black';
    italicText.style.color = 'white';
    textBox.style.fontStyle = 'italic';
    
})

addListener(underlineText, 'click',function () {
    underlineText.style.backgroundColor = 'black';
    underlineText.style.color = 'white';
    textBox.style.textDecoration = 'underline';
    
})

function getElement(id) {
    return document.querySelector(id);
}

function addListener(element, eventType, callBack) {
    element.addEventListener(eventType, callBack);
}
