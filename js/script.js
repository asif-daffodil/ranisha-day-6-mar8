const mbi = document.getElementById("mbi");
const navLinks = document.querySelector(".nav-links");

mbi.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})