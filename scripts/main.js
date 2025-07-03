const ham = document.getElementById("ham-btn");

ham.addEventListener("click", () => {
  ham.classList.toggle("show");
  const nav = document.querySelector("nav");
  nav.classList.toggle("show");
});