const ham = document.getElementById("ham-btn");

ham.addEventListener("click", () => {
  ham.classList.toggle("show");
  const nav = document.querySelector("nav");
  nav.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const documentCards = document.querySelectorAll(".document-card");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    documentCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector("p").textContent.toLowerCase();

      const matches = title.includes(searchTerm) || description.includes(searchTerm);

      card.style.display = matches ? "block" : "none";
    });
  });
});
