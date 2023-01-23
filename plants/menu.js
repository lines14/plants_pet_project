document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector("header").classList.toggle("open")
    })
})