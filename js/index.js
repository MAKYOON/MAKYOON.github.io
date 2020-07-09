const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#navbar-items');
const body = document.querySelector('body');
const dropdown = document.querySelectorAll('.dropdown');
const dropdowncontents = document.querySelectorAll('.dropdown-content');

//handling the navbar in small medias : instead of hovering we need to click
dropdown.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        if (document.body.clientWidth < 1150) {
            dropdowncontents[index].classList.toggle('dropdown-content');
            dropdowncontents[index].classList.toggle('dropdown-click');
        }
    })
})



//toggling the nav-active class which plays the animation of fading in the dropdown in and out
hamburger.addEventListener('click', () => {
    console.log("clicked");
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('nav-inactive');
    nav.classList.toggle('nav-active');
});

//this is so we can get rid of the dropdown by clicking anywhere else on the page
//we have to check for the target ID because if we click on the burger it runs both listeners and so nothing happens
body.addEventListener('click', (e) => {
    if (e.target.id != "hamburger" && !e.target.classList.contains('dropdownbtn') && e.target.id != "navbar") {
        nav.classList.add('nav-inactive');
        nav.classList.remove('nav-active');
        hamburger.classList.remove('hamburger-active');
        dropdowncontents.forEach(element => {
            element.classList.remove('dropdown-click');
            element.classList.add('dropdown-content');
        })
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

