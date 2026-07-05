/* Variables for the image carousel
let image = document.getElementById("scrollImg");
let frame1;
let frame2;
let frame3;*/

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
    sproutA.textContent = "Sprouts should be kept consistently moist but not waterlogged. I'd recommend using a mist watering can to ensure ";
    sproutA.textContent += "no more water is present than necessary to prevent root endrot.";
}
function dropdown3() {
    devingA.textContent = 'Water developing pepper plants about once per week, at least enough to let the soil dry out a bit first. They do ';
    devingA.textContent += "not like to be kept consistently wet, as their roots could become rotted at the tips. This would make the pepper "
    devingA.textContent += "unstable both externally and internally.";
}
function dropdown4() {
    bushA.textContent = 'An in-ground pepper bush may be hosed down once per week if exposed to direct sunlight for the prescribed 6 hours ';
    bushA.textContent += "per day. They are very self-sufficient and hardy, so if you have a nice aquifer or a light rain here and there ";
    bushA.textContent += "throughout the week, you should be fine!";
}

//image.addEventListener('click', scrolling);
howmuch.addEventListener('click', dropdown1);
sprout.addEventListener('click', dropdown2);
deving.addEventListener('click', dropdown3);
bush.addEventListener('click', dropdown4);