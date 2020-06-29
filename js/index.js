const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

//toggling the nav-active class which plays the animation of fading in the dropdown in and out
hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

//this is so we can get rid of the dropdown by clicking anywhere else on the page
//we have to check for the target ID because if we click on the burger it runs both listeners and so nothing happens
body.addEventListener('click', (e) => {
    if (e.target.id !== "hamburger") {
        nav.classList.remove('nav-active');
    }
});

//this is to make sure the animation doesnt play when resizing the page
let resizeTimer;
window.addEventListener("resize", () => {
    nav.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        nav.classList.remove('resize-animation-stopper');
    },400);
});

