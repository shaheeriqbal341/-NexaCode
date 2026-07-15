/*==========================================
        NexaCode Studio
        Premium JavaScript
==========================================*/

/*==============================
      Sticky Navbar
==============================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "10px 0";
        navbar.style.background = "rgba(15,23,42,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.20)";

    } else {

        navbar.style.padding = "18px 0";
        navbar.style.background = "rgba(15,23,42,.75)";
        navbar.style.boxShadow = "none";

    }

});


/*==============================
      Back To Top Button
==============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/*==============================
      Scroll Progress Bar
==============================*/

const progress = document.createElement("div");

progress.classList.add("scroll-progress");

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    let scroll =
        document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let percent = (scroll / height) * 100;

    progress.style.width = percent + "%";

});


/*==============================
      Fade Animation
==============================*/

const fadeElements =
document.querySelectorAll("section");

const observer =
new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

fadeElements.forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});


/*==============================
      Counter Animation
==============================*/

const counters =
document.querySelectorAll(".bg-dark h2");

counters.forEach(counter=>{

const updateCounter=()=>{

const target =
+counter.innerText.replace(/\D/g,'');

const count =
+counter.innerText.replace(/\D/g,'');

let start = 0;

const speed = target/100;

const interval =
setInterval(()=>{

start += speed;

if(start >= target){

counter.innerText =
target + "+";

clearInterval(interval);

}else{

counter.innerText =
Math.floor(start) + "+";

}

},20);

}

updateCounter();

});


/*==============================
      Active Navbar Link
==============================*/

const navLinks =
document.querySelectorAll(".nav-link");

navLinks.forEach(link=>{

link.addEventListener("click",function(){

navLinks.forEach(item=>{

item.classList.remove("active");

});

this.classList.add("active");

});

});


/*==============================
      Image Hover Effect
==============================*/

const images =
document.querySelectorAll(".card img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


console.log("NexaCode Studio Loaded Successfully 🚀");


/*==========================================
            DARK MODE
==========================================*/

const themeBtn = document.getElementById("themeToggle");
const body = document.body;

if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark-mode");

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

