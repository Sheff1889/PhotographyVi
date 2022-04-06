const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        //Hamburger animation 

        hamburger.classList.toggle('toggle'); 
        

    });
}

navSlide();




/* var elms = document.getElementsByClassName("line");
var n = elms.length;
function changeColor(color) {
    for(var i = 0; i < n; i ++) {
        elms[i].style.backgroundColor = color;
    }
}
for(var i = 0; i < n; i ++) {
    elms[i].onmouseover = function() {
        changeColor("#540103");
    };
    elms[i].onmouseout = function() {
        changeColor("white");
    };
} */