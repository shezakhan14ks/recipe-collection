// scripts.js
const recipes = [
  { title: "Scrambled Eggs", category: "breakfast" },
  { title: "Chicken Salad", category: "lunch" },
  { title: "Spaghetti Bolognese", category: "dinner" },
  // Add more recipes here
];

function displayRecipes(category = "") {
  const container = document.getElementById("recipe-container");
  container.innerHTML = "";

  recipes.forEach(recipe => {
    if (category === "" || recipe.category === category) {
      const card = document.createElement("div");
      card.classList.add("recipe-card");
      card.textContent = recipe.title;
      container.appendChild(card);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayRecipes();

  document.querySelectorAll(".category-filter").forEach(filter => {
    filter.addEventListener("click", () => {
      const category = filter.dataset.category;
      document.querySelector(".active").classList.remove("active");
      filter.classList.add("active");
      displayRecipes(category);
    });
  });
});
