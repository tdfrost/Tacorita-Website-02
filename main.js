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