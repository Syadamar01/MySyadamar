document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in, .slide-in").forEach(el => {
        el.style.animationDelay = "0.5s";
    });

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Pesan berhasil dikirim!");
        this.reset();
    });
});