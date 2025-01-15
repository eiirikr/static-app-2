// script.js

// Example: Smooth scrolling when clicking on navigation links
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Get the target section ID from the href attribute
    const targetId = this.getAttribute("href").substring(1);

    // Scroll to the target section smoothly
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Example: Displaying featured section with a simple alert (expand as necessary)
document.getElementById("featured").addEventListener("click", function () {
  alert("Explore featured resources!");
});
