const all_div = document.getElementById("all_div");
const vanish1 = document.getElementsByClassName("vanish1")[0];
const vanish2 = document.getElementsByClassName("vanish2")[0];


function all_divMouseLeave() {
    all_div.addEventListener("mouseleave", function() {
        console.log("T'es plus sur moi bro");
        vanish2.style.display = "none";
        vanish1.style.display = "block";
    })
}

function all_divMouseOver() {
    all_div.addEventListener("mouseover", function() {
        console.log("T'es sur moi bro");
        vanish2.style.display = "block";
        vanish1.style.display = "none";
    })
}

all_divMouseOver();
all_divMouseLeave();


// TOOGGLE BUTTON
let toggle_btn = document.getElementsByClassName("toggle_btn")[0];
const menu = document.getElementsByClassName("menu");

toggle_btn.addEventListener("click", function() {
    console.log("Wesh tu m'as cliqué gros");
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.toggle("actived");
    }
})