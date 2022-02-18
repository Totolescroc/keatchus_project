let toggleButton = document.querySelector("#toggle-button");
let sideBar = document.querySelector("#side-bar");
let menu = document.querySelector(".menu");

toggleButton.addEventListener("click", show);

function show() {
  sideBar.classList.toggle("active");
}


let js_btn_planning = document.querySelector(".btn_planning");
let js_btn_shoplist = document.querySelector(".btn_shoplist");
let js_content_planning = document.querySelector(".content_planning");
let js_shoplist = document.querySelector(".shoplist");
console.log(js_btn_planning);

// Swipe bar planning/liste de courses

// display planning and hide shoplist for the begining
js_content_planning.style.display = "block";
js_shoplist.style.display = "none";

// When you click planning button, planning = display and shoplist = hide
js_btn_planning.addEventListener("click", () => {
    js_shoplist.style.display = "none";
    js_content_planning.style.display = "block";

} )

// When you click shoplist button, planning = hide and shoplist = display
js_btn_shoplist.addEventListener("click", () => {
    js_shoplist.style.display = "block";
    js_content_planning.style.display = "none";

} )

function myFunction(x) {
    if (x.matches) { // If media query matches
        js_shoplist.style.display = "block";

    } else {
        js_shoplist.style.display = "none";  
    }
  }
  
  var x = window.matchMedia("(min-width: 1024px)")
  myFunction(x) // Call listener function at run time



