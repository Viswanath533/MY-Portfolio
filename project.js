document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Hide all sections except the first one
    sections.forEach(section => section.style.display = "none");
    document.querySelector("#education").style.display = "block";

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);

            sections.forEach(section => section.style.display = "none");
            document.getElementById(targetId).style.display = "block";
        });
    });
});
