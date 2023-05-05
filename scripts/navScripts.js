const navbar = document.querySelector('#navbar');
const navbarToggler = document.querySelector('.navbar-toggler');


// disappear on scroll
// closes collapsable navbar if collapsed
const navbarHeight = navbar.offsetHeight - 80;
const placeholder = document.createElement('div');
placeholder.style.height = `${navbarHeight + 80}px`;
navbar.after(placeholder);

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const SCROLL_THRESHOLD = 50;
    let currentScroll = scrollY;

    if (currentScroll > lastScroll + SCROLL_THRESHOLD && currentScroll > navbarHeight) {
        navbar.classList.add('is-hidden');
        if (navbar.querySelector('.collapse.show')) {
            navbarToggler.click();
        }
        lastScroll = currentScroll;
    } else if (currentScroll < lastScroll || currentScroll < navbarHeight) {
        navbar.classList.remove('is-hidden');
        lastScroll = currentScroll;
    }
});


// navbar shadow
window.addEventListener('scroll', () => {
    if (scrollY !== 0) {
        navbar.classList.add('shadow');
    } else if (navbar.classList.contains('shadow') && !navbar.querySelector('.collapse.show')) {
        navbar.classList.remove('shadow');
    }
});


// shadow on navbar toggle at 0 ScrollY
// pink box shadow on navbar-toggler while collapse
navbar.addEventListener('show.bs.collapse', () => {
    if (scrollY === 0) {
        navbar.classList.add('shadow');
    }
    navbarToggler.style.boxShadow = "4px 4px 4px 0 #f0617b";
});

navbar.addEventListener('hide.bs.collapse', () => {
    if (scrollY === 0) {
        navbar.classList.remove('shadow');
    }
    navbarToggler.style.boxShadow = "none";
});

