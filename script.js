// Scroll reveal animation
const sections = document.querySelectorAll("section");

function reveal() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 100){
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav ul");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}