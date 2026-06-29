// Animasi muncul saat scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Navbar berubah saat scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.background = "#020617";
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
  } else {
    nav.style.background = "#0f172a";
    nav.style.boxShadow = "none";
  }
});