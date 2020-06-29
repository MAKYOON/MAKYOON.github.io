const navToggle = () => {
    const hamburger = document.querySelector('#hamburger');
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    body.addEventListener('click', (e) => {
        if (e.target.id != "hamburger") {
            nav.classList.remove('nav-active');
        }
    });
}

navToggle();
