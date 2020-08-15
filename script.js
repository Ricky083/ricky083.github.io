const burger = document.querySelector('.burger'); 
const nav = document.querySelector('.viv-links');


function vivSlide() {
    nav.classList.toggle('navActive');
}

burger.addEventListener('click', vivSlide);

const btn = document.querySelector('.btn');
const aboutP = document.querySelector('.aboutParagraph')
const about = document.querySelector('.about');

function readMore() {
    aboutP.classList.toggle('read-more');
    

    if (btn.textContent == "Show More") {
        btn.textContent = "Show Less";
    } else {
        btn.textContent = "Show More";
    }
}

btn.addEventListener('click', readMore);
