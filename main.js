// Select element function
const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function() {
    body.classList.toggle('open');
}
);

//get the button navs
let tabButtons = document.querySelectorAll('.tab-links');

//get all content
let tabContents = document.querySelectorAll('.tab-content');

window.onload = function(){
    document.getElementById('default-open').style.display = "block";
}

// Hide content function
const hideContent = function() {
    tabContents.forEach(content => {
        content.style.display = "none"
    })
}

// adding event listen for the buttons
tabButtons.forEach(button => {
    button.addEventListener('click', function(){
        let contentClass = `${button.classList[1]}-content`
        hideContent();
        document.querySelector(`.${contentClass}`).style.display = "block";
    })
})

//Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-left-slow', {
    origin: 'left',
    duration: 1200,
    distance: '25rem',
    delay: 500
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-right-slow', {
    origin: 'right',
    duration: 1200,
    distance: '25rem',
    delay: 500
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-col-one', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-col-two', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 900
});

sr.reveal('.animate-col-three', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 1200
});

sr.reveal('.animate-col-four', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 1500
});

sr.reveal('.animate-card-one', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-card-two', {
    origin: 'bottom',
    duration: 1500,
    distance: '25rem',
    delay: 900
});

sr.reveal('.animate-card-three', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 1200
});
sr.reveal('.animate-card-four', {
    origin: 'bottom',
    duration: 1500,
    distance: '25rem',
    delay: 1500
});

sr.reveal('.animate-card-five', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 1800
});

sr.reveal('.animate-card-six', {
    origin: 'bottom',
    duration: 1500,
    distance: '25rem',
    delay: 2100
});

sr.reveal('.animate-card-seven', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 2400
});