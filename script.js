const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

const textArray = ["Creative Developer", "UI Designer", "JavaScript Enthusiast"];
let typingElement = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 300);
    }
}

typeEffect();


function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


function showMessage() {
    alert("Thank you for reaching out! 🚀");
}


const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});
window.addEventListener("load", () => {
    document.querySelector(".preloader").style.display = "none";
});
const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
    } else {
        localStorage.setItem("theme","dark");
    }
});
const progressBars = document.querySelectorAll(".progress div");

window.addEventListener("scroll", () => {
    progressBars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;
        if(top < window.innerHeight - 50){
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if(window.scrollY > 50){
        nav.style.background = "rgba(0,0,0,0.6)";
    } else {
        nav.style.background = "rgba(255,255,255,0.05)";
    }
});
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
    });
});
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() - 0.5;
        this.speedY = Math.random() - 0.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(){
        ctx.fillStyle = "#00f2ff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
    }
}

function initParticles(){
    for(let i=0;i<100;i++){
        particlesArray.push(new Particle());
    }
}

function animateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particlesArray.forEach(p=>{
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
