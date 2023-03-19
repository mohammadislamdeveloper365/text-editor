const openMenu = getElement('.text-editor--header-open-menu');
const closeMenu = getElement('.text-editor--header-close-menu');
const mainMenu = getElement('.text-editor--header-main-menu');

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


function getElement(id) {
    return document.querySelector(id);
}

function addListener(element, eventType, callBack) {
    element.addEventListener(eventType, callBack);
}