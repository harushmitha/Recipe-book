const recipes = [
    // Veg Recipes
    { 
        name: "Aloo Gobi", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuN-GxF-T0HZRp-1pdVboE0X2rX0EzzVY18A&s", 
        ingredients: ["Potato", "Cauliflower", "Cumin", "Turmeric", "Coriander", "Garam masala", "Onion", "Tomato"], 
        steps: ["Cook cumin seeds and onions.", "Add spices and vegetables.", "Cook until tender.", "Garnish with cilantro."], 
        category: "veg" 
    },
{ 
        name: "Vegetable Biryani", 
        image: "https://i.ytimg.com/vi/NtuIRDuIvgs/sddefault.jpg", 
        ingredients: ["Rice", "Carrot", "Green peas", "Cauliflower", "Spices", "Cilantro", "Mint"], 
        steps: ["Fry vegetables with spices.", "Cook rice separately.", "Layer rice with vegetables.", "Serve hot."], 
        category: "veg" 
    },
    { 
        name: "Palak Paneer", 
        image: "https://www.yummytummyaarthi.com/wp-content/uploads/2021/11/palak-paneer-1.jpg", 
        ingredients: ["Spinach", "Paneer", "Garlic", "Ginger", "Cumin", "Onion", "Tomato", "Garam masala"], 
        steps: ["Blanch spinach.", "Cook onion, ginger, garlic.", "Add spinach and paneer.", "Cook until tender."], 
        category: "veg" 
    },
    { 
        name: "Chana Masala", 
        image: "https://www.tastingtable.com/img/gallery/instant-pot-chana-masala-recipe/l-intro-1646343429.jpg", 
        ingredients: ["Chickpeas", "Onion", "Tomato", "Cumin", "Garlic", "Coriander", "Chili powder"], 
        steps: ["Cook chickpeas.", "Sauté onions and tomatoes.", "Add spices.", "Simmer until thick."], 
        category: "veg" 
    },
    { 
        name: "Aloo Paratha", 
        image: "https://www.maggi.in/sites/default/files/styles/home_stage_944_531/public/srh_recipes/9cc96dc3b0168582c17fe2d98218026a.jpg?h=0de9e9a9&itok=hcOAM3kP", 
        ingredients: ["Wheat flour", "Potato", "Cumin", "Coriander", "Onion", "Green chilies", "Ghee"], 
        steps: ["Make dough.", "Prepare potato filling.", "Roll and cook parathas.", "Serve hot with yogurt."], 
        category: "veg" 
    },
    { 
        name: "Rajma", 
        image: "https://www.kuchpakrahahai.in/wp-content/uploads/2015/09/Rajma-Recipe-Kidney-Beans-Curry.jpg", 
        ingredients: ["Kidney beans", "Onion", "Tomato", "Ginger", "Garlic", "Cumin", "Chili powder"], 
        steps: ["Cook kidney beans.", "Sauté onions and spices.", "Add beans and cook.", "Serve with rice."], 
        category: "veg" 
    },
    { 
        name: "Baingan Bharta", 
        image: "https://spicecravings.com/wp-content/uploads/2023/03/Baingan-Bharta-Featured-2.jpg", 
        ingredients: ["Eggplant", "Onion", "Tomato", "Garlic", "Cumin", "Coriander"], 
        steps: ["Roast eggplant.", "Cook onions and tomatoes.", "Mash eggplant and mix.", "Serve hot."], 
        category: "veg" 
    },
    { 
        name: "Methi Thepla", 
        image: "https://rakskitchen.net/wp-content/uploads/2009/05/methi-thepla.jpg", 
        ingredients: ["Fenugreek leaves", "Wheat flour", "Cumin", "Chili powder", "Ginger", "Ghee"], 
        steps: ["Knead dough.", "Roll and cook theplas.", "Serve with pickle and yogurt."], 
        category: "veg" 
    },
    { 
        name: "Gobi Manchurian", 
        image: "https://i.ytimg.com/vi/6H0a6gXHEo4/maxresdefault.jpg", 
        ingredients: ["Cauliflower", "Corn flour", "Ginger", "Garlic", "Soy sauce", "Chili sauce"], 
        steps: ["Fry cauliflower florets.", "Prepare sauce with spices.", "Mix and serve."], 
        category: "veg" 
    },

    // Non-Veg Recipes
    { 
        name: "Chicken Tikka Masala", 
        image: "https://www.spicebangla.com/wp-content/uploads/2024/04/chicken-tikka-masala.jpg", 
        ingredients: ["Chicken", "Yogurt", "Garlic", "Ginger", "Tomato puree", "Coriander", "Cumin", "Cilantro", "Cream"], 
        steps: ["Marinate chicken with yogurt, garlic, ginger, and spices.", "Grill or bake the chicken.", "Make the sauce.", "Simmer with chicken.", "Add cream and cilantro."], 
        category: "nonveg" 
    },
    { 
        name: "Butter Chicken", 
        image: "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg", 
        ingredients: ["Chicken", "Butter", "Tomato paste", "Onion", "Cream", "Ginger", "Garlic", "Spices"], 
        steps: ["Cook chicken.", "Prepare the butter sauce.", "Add chicken to sauce.", "Garnish with cilantro."], 
        category: "nonveg" 
    },
    { 
        name: "Chicken Korma", 
        image: "https://i.ndtvimg.com/i/2016-10/chicken-korma_650x400_51475662188.jpg", 
        ingredients: ["Chicken", "Cashews", "Yogurt", "Onion", "Garlic", "Ginger", "Spices"], 
        steps: ["Marinate chicken.", "Cook onions and spices.", "Add chicken and cook.", "Finish with cream."], 
        category: "nonveg" 
    },
    { 
        name: "Fish Curry", 
        image: "https://5.imimg.com/data5/SELLER/Default/2024/9/450200199/YQ/YC/AI/230584086/fish-curry-half.jpg", 
        ingredients: ["Fish", "Tomato", "Onion", "Coconut milk", "Ginger", "Garlic", "Cumin"], 
        steps: ["Cook fish.", "Prepare the curry base.", "Simmer fish in curry.", "Serve hot."], 
        category: "nonveg" 
    },
    { 
        name: "Lamb Rogan Josh", 
        image: "https://static.toiimg.com/thumb/53192600.cms?imgsize=418831&width=800&height=800", 
        ingredients: ["Lamb", "Yogurt", "Ginger", "Garlic", "Onion", "Spices", "Cilantro"], 
        steps: ["Cook lamb in spices.", "Simmer with yogurt.", "Add garnish.", "Serve hot."], 
        category: "nonveg" 
    },
    { 
        name: "Mutton Biryani", 
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg", 
        ingredients: ["Mutton", "Rice", "Ginger", "Garlic", "Spices", "Cilantro"], 
        steps: ["Fry mutton.", "Cook rice separately.", "Layer rice and mutton.", "Serve hot."], 
        category: "nonveg" 
    },
    { 
        name: "Prawn Masala", 
        image: "https://www.whiskaffair.com/wp-content/uploads/2023/02/Shrimp-Masala-2-3.jpg", 
        ingredients: ["Prawns", "Onion", "Tomato", "Garlic", "Ginger", "Coriander", "Turmeric"], 
        steps: ["Cook prawns.", "Sauté onions and tomatoes.", "Add prawns and spices.", "Serve hot."], 
        category: "nonveg" 
    },
    { 
        name: "Egg Curry", 
        image: "https://www.spicebangla.com/wp-content/uploads/2024/08/Egg-Masala-Curry.webp", 
        ingredients: ["Egg", "Onion", "Tomato", "Ginger", "Garlic", "Cumin"], 
        steps: ["Hard boil eggs.", "Cook onion and spices.", "Add eggs and simmer.", "Serve hot."], 
        category: "nonveg" 
    },
    { 
        name: "Chicken Pakora", 
        image: "https://i.pinimg.com/originals/31/1c/7c/311c7cb72cc36fb98d4977675b1ce593.jpg", 
        ingredients: ["Chicken", "Besan", "Ginger", "Garlic", "Cumin", "Coriander"], 
        steps: ["Marinate chicken.", "Dip in batter.", "Fry pakoras.", "Serve hot."], 
        category: "nonveg" 
    },

    // Diet Recipes
    { 
        name: "Diet Salad", 
        image: "https://connect.healthkart.com/wp-content/uploads/2022/01/Banner-33.jpg", 
        ingredients: ["Lettuce", "Tomatoes", "Cucumber", "Olive oil", "Lemon juice", "Salt", "Pepper"], 
        steps: ["Chop vegetables.", "Mix with olive oil and lemon.", "Serve fresh."], 
        category: "diet" 
    },
    { 
        name: "Quinoa Bowl", 
        image: "https://www.foodbymaria.com/wp-content/uploads/2023/01/Quinoa-Bowl-4-scaled.jpg", 
        ingredients: ["Quinoa", "Avocado", "Cucumber", "Lemon", "Spinach", "Olive oil"], 
        steps: ["Cook quinoa.", "Prepare vegetables.", "Mix together.", "Serve with dressing."], 
        category: "diet" 
    },
    { 
        name: "Grilled Veggies", 
        image: "https://www.acouplecooks.com/wp-content/uploads/2020/03/Grilled-Vegetables-014.jpg", 
        ingredients: ["Zucchini", "Bell peppers", "Eggplant", "Olive oil", "Lemon", "Herbs"], 
        steps: ["Grill vegetables.", "Season with olive oil and lemon.", "Serve warm."], 
        category: "diet" 
    },
    { 
        name: "Avocado Toast", 
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2016/08/avocado-garlic-bread-toast-recipe-1.jpg", 
        ingredients: ["Avocado", "Whole grain bread", "Lemon", "Pepper"], 
        steps: ["Toast bread.", "Mash avocado.", "Spread on toast.", "Serve with pepper."], 
        category: "diet" 
    },
    { 
        name: "Chicken Caesar Salad", 
        image: "https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Low-carb-Caesar-salad-4.jpg", 
        ingredients: ["Chicken", "Lettuce", "Parmesan", "Caesar dressing", "Croutons"], 
        steps: ["Grill chicken.", "Prepare salad.", "Toss with dressing.", "Serve chilled."], 
        category: "diet" 
    },
    { 
        name: "Zucchini Noodles", 
        image: "https://ketodietapp.com/Blog/lchf-soc/the-best-way-to-cook-zucchini-noodles-5CD669B8.jpg", 
        ingredients: ["Zucchini", "Garlic", "Olive oil", "Parmesan"], 
        steps: ["Spiralize zucchini.", "Sauté with garlic.", "Top with Parmesan.", "Serve warm."], 
        category: "diet" 
    },
    { 
        name: "Chia Pudding", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhf6SoLHJ-uc-16Ir2tjGUfUO1A_YFEi6Jg&s", 
        ingredients: ["Chia seeds", "Almond milk", "Honey", "Berries"], 
        steps: ["Mix chia and almond milk.", "Refrigerate overnight.", "Top with berries.", "Serve cold."], 
        category: "diet" 
    },
    { 
        name: "Greek Yogurt Parfait", 
        image: "https://tealnotes.com/wp-content/uploads/2023/05/Greek-Yogurt-Parfait-1.jpg", 
        ingredients: ["Greek yogurt", "Honey", "Berries", "Granola"], 
        steps: ["Layer yogurt, honey, berries, and granola.", "Serve chilled."], 
        category: "diet" 
    },
    { 
        name: "Veggie Soup", 
        image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main.jpg", 
        ingredients: ["Carrot", "Celery", "Tomato", "Spinach", "Olive oil"], 
        steps: ["Cook vegetables.", "Add broth.", "Simmer.", "Serve warm."], 
        category: "diet" 
    }

];

let currentRecipes = recipes;

function displayRecipes(filteredRecipes = recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = ''; // Clear previous content

    filteredRecipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.style.backgroundImage = `url(${recipe.image})`;
        recipeCard.innerHTML = `<h3>${recipe.name}</h3>`;
        recipeCard.onclick = () => showRecipeDetails(filteredRecipes, index);

        recipeList.appendChild(recipeCard);
    });
}

function showRecipeDetails(filteredRecipes, index) {
    const recipe = filteredRecipes[index];
    const recipeInfo = document.getElementById('recipe-info');
    const recipeDetails = document.getElementById('recipe-details');
    const recipeList = document.getElementById('recipe-list');

    recipeInfo.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; max-height: 400px; object-fit: cover;">
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h3>Steps:</h3>
        <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;

    recipeDetails.style.display = 'block';
    recipeList.style.display = 'none';
}

function backToHome() {
    const recipeDetails = document.getElementById('recipe-details');
    const recipeList = document.getElementById('recipe-list');
    recipeDetails.style.display = 'none';
    recipeList.style.display = 'flex';
}

function filterRecipes(category) {
    currentRecipes = recipes.filter(recipe => recipe.category === category);
    displayRecipes(currentRecipes);
}

document.getElementById('search-bar').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
    displayRecipes(filtered);
});

// Initially display all recipes
displayRecipes();
