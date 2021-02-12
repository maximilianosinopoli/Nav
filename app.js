
const navSlide = () => {
    const burguer = document.querySelector(".burguer");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    // Slide

    burguer.addEventListener("click", () => {

        nav.classList.toggle("nav-active");

    // Animation

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
            }
        });

    // Burguer Animation

        burguer.classList.toggle("toggle");
    });    
}

navSlide();

// const app = () => {
//     navSlide();
// }