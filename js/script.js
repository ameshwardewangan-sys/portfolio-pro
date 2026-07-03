const text = "Hi, I'm Ameshwar Dewangan";
const typing = document.getElementById("typing");

let i = 0;

function type() {
    if (typing && i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

type();

// Dark / Light Mode

const btn = document.getElementById("theme-toggle");

if (btn) {
    btn.onclick = function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            btn.innerHTML = "☀️";
        } else {
            btn.innerHTML = "🌙";
        }
    };
}
// Loading Screen

window.addEventListener("load",function(){

    setTimeout(function(){

        document.getElementById("loader").style.display="none";

    },1200);

});
// Scroll Progress Bar

window.onscroll = function(){

let winScroll = document.documentElement.scrollTop;

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let scrolled = (winScroll / height) * 100;

document.getElementById("progress-bar").style.width = scrolled + "%";

};
// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// Mobile Menu

const menu = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menu && navLinks){
    menu.onclick = function(){
        navLinks.classList.toggle("active");
    };
}
