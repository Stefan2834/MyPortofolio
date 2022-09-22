var menu = document.getElementById("menu");
navBar = document.getElementById("navbar");
navIcons = document.querySelectorAll(".nav-icons");
line = document.getElementById("line");
topBar = document.querySelector(".top");
middleBar = document.querySelector(".middle");
bottomBar = document.querySelector(".bottom");
content = document.querySelector("#content");
bg = document.getElementById("bg-block");
Menu = false;

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






var mediaLine = document.querySelector(".media-line");
instaApp = document.querySelector(".instaApp");
twitterApp = document.querySelector(".twitterApp");
whatsappApp = document.querySelector(".whatsappApp");
youtubeApp = document.querySelector(".youtubeApp");
facebookApp = document.querySelector(".facebookApp");
mediaApp = document.querySelectorAll(".mediaApp");

//coloreaza mediaLine cand cursorul este pe un mediaApp

instaApp.addEventListener("mouseenter", () => {
    mediaLine.style.background = "#dc2743"
})
twitterApp.addEventListener("mouseenter", () => {
    mediaLine.style.background = "#00acee"
})
whatsappApp.addEventListener("mouseenter", () => {
    mediaLine.style.background = "#25D366"
}) 
youtubeApp.addEventListener("mouseenter", () => {
    mediaLine.style.background = "#ff0000"
}) 
facebookApp.addEventListener("mouseenter", () => {
    mediaLine.style.background = "#4267b2"
}) 
mediaApp.forEach(mediaApp => {
    mediaApp.addEventListener("mouseleave", () => {
        mediaLine.style.background = "#ffffff";
    })
})


window.onscroll = function () {menuClose()} //inchide meniu cand dai scroll
window.onload = function () {
    menuClose(), // inchide meniu cand dai refresh 
    header(),
    smoothSlide() }
window.onresize = function () {header(), menuClose()};// inchide meniu daca schimbi dimensiunea pagini 



