document.addEventListener("DOMContentLoaded", function() {
    const recipesContainer = document.getElementById("recipes");

    // Sample data for recipes
    const recipes = [
        {
            title: "Spaghetti Carbonara",
            description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
            image:"https://images.unsplash.com/photo-1585672840829-d4ed3abbfb27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMTkwNDR8&ixlib=rb-4.0.3&q=80&w=400"
        },
        {
            title: "Chicken Tikka Masala",
            description: "Creamy and flavorful Indian curry dish with marinated chicken in a spiced tomato sauce.",
            image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMjA0NzB8&ixlib=rb-4.0.3&q=80&w=400"
        },
        {
            title: "Chocolate Chip Cookies",
            description: "Soft and chewy cookies loaded with chocolate chips.",
            image: "https://images.unsplash.com/photo-1591798153699-4b0bd9d57e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMjA2MDJ8&ixlib=rb-4.0.3&q=80&w=400"
        },
      {
        title: "Caprese Salad",
        description: "Fresh salad made with ripe tomatoes, mozzarella cheese, basil leaves, olive oil, and balsamic vinegar.",
        image: "https://images.unsplash.com/photo-1614098026096-f69b76d1eabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMjA4MTZ8&ixlib=rb-4.0.3&q=80&w=400"
    },
     {
        title: "Pancakes",
        description: "Fluffy pancakes served with maple syrup and butter.",
        image: "https://images.unsplash.com/photo-1613452707901-21b3fd7f7e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMjA5NTZ8&ixlib=rb-4.0.3&q=80&w=400"
      },
        ];

    function renderRecipes() {
        recipes.forEach(recipe => {
            const recipeElement = document.createElement("div");
            recipeElement.classList.add("recipe");
            
            const imageElement = document.createElement("img");
            imageElement.src = recipe.image;
            recipeElement.appendChild(imageElement);

            const titleElement = document.createElement("h2");
            titleElement.textContent = recipe.title;
            recipeElement.appendChild(titleElement);

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = recipe.description;
            recipeElement.appendChild(descriptionElement);

            recipesContainer.appendChild(recipeElement);
        });
}
