// Variables for the image carousel
let image = document.getElementById("scrollImg");
let frame1;
let frame2;
let frame3;

// Variables for the dropdown
let howmuch = document.getElementById('howmuch');
let howmuchA = document.getElementById('howmuchA');
let sprout = document.getElementById('sprout');
let sproutA = document.getElementById('sproutA');
let deving = document.getElementById('deving');
let devingA = document.getElementById('devingA');
let bush = document.getElementById('bush');
let bushA = document.getElementById('bushA');

function scrolling() {
    if (image.src == frame1) {
        image.src = frame2;
    } else if (image.src == frame2) {
        image.src = frame3;
    } else if (image.src == frame3) {
        image.src = frame1;
    }
}

function dropdown1() {
    howmuchA.textContent = 'Depending on stage of life cycle & other climate factors (heat, rain tendencies, etc.)';
    console.log("test");
}
function dropdown2() {
    sproutA.textContent = 'The habanero is thought to have originated in Meso- or South-America.';
}
function dropdown3() {
    devingA.textContent = 'Text1';
}
function dropdown4() {
    bushA.textContent = 'Text2';
}

image.addEventListener('click', scrolling);
howmuch.addEventListener('click', dropdown1);
sprout.addEventListener('click', dropdown2);
deving.addEventListener('click', dropdown3);
bush.addEventListener('click', dropdown4);