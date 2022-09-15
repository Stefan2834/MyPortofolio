var menu = document.getElementById("menu");
var navBar = document.getElementById("navbar");
var navIcons = document.querySelectorAll(".nav-icons");
var line = document.getElementById("line");
var topBar = document.querySelector(".top");
var middleBar = document.querySelector(".middle");
var bottomBar = document.querySelector(".bottom");
var content = document.querySelector("#content");
var bg = document.getElementById("bg-block");
var Menu = false;

menu.addEventListener("click", menuSlide);

function menuSlide() {
    if (!Menu) {
        navIcons.forEach(navIcons => {
            navIcons.style.width = "190px";
        })
        navBar.style.width = "200px";
        line.style.width = "180px";
        topBar.style.width = "30px";
        middleBar.style.width = "40px";
        bottomBar.style.width = "30px";
        content.style.opacity = "0.6";
        bg.style.display = "inherit";
        Menu = true;
        
        // deschidere meniu
    } else {
        navIcons.forEach(navIcons => {
            navIcons.style.width = "60px";
        })
        if (window.outerWidth > 1000) {
            navBar.style.width = "70px";
        } else {
            navBar.style.width = "0px";
            menu.style.width = "70px"
        }
        topBar.style.width = "40px";
        line.style.width = "50px";
        middleBar.style.width = "30px";
        bottomBar.style.width = "40px";
        content.style.opacity = "1";
        bg.style.display = "none";
        Menu = false;

        //inchidere meniu
    }
}

content.addEventListener("click", menuClose);  // setare inchidere meniu daca apesi langa el



function menuClose() {
    Menu = true;
    return menuSlide();
} // inchide meniu 
function header () {
    var header = document.getElementById("header");
    if (window.outerWidth > 1000) {
        header.style.display = "none";
    } else {
        header.style.display = "inherit";
    }
} //pornire sau oprire header bar daca esti pe telefon. 
function pageTo () {
    window.scrollTo(0, 0);
} // scroll top = 0
window.onscroll = function () {menuClose()}; //inchide meniu cand dai scroll
window.onload = function () {menuClose(), header(), pageTop()};// inchide meniu cand dai refresh
window.onresize = function () {header(), menuClose()};// inchide meniu daca schimbi dimensiunea pagini

