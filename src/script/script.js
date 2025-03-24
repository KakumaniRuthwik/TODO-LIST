const toggle = document.querySelector(".toggleButton");
const toggleIcon = document.querySelector(".toggleIcon");
const aside = document.querySelector("aside");
let isClicked = true;

toggle.addEventListener("click", ()=> {

    //Changing src path of image when clicked.
    toggleIcon.setAttribute("src",  (isClicked) ? "./Icons/Close.svg" : "./Icons/Hamburger.svg");
    toggleIcon.setAttribute("alt",  (isClicked) ? "Menu Icon" : "Close Icon");
    isClicked = !isClicked;

    //Animation to close side bar
    aside.classList.toggle(`-translate-x-[16.25vw]`);
});