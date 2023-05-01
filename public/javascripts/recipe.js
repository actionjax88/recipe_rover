var date = new Date();
const year = date.getFullYear();
let recipes = [];
let nextId = localStorage.length;
let user = "";

class Recipe {
  constructor(
    id,
    title,
    description,
    steps,
    servings,
    people,
    ingredient,
    measurement,
    unit,
    image
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.steps = steps;
    this.servings = servings;
    this.people = people;
    this.ingredient = ingredient;
    this.measurement = measurement;
    this.unit = unit;
    this.image = image;
  }
}

function checkName() {
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  } else {
    user = prompt("Please enter your name: ");
    localStorage.setItem("user", JSON.stringify(user));
  }
}

function getNextId() {
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("recipe" + nextId)) {
      console.log("alredy exists: " + localStorage.key(i));
      nextId += 1;
    }
  }
}

function saveRecipe(form) {
  getNextId();
  let recipe = new Recipe(
    nextId,
    form.recipeTitle.value,
    form.recipeDescription.value,
    form.recipeSteps.value,
    form.recipeNumServing.value,
    form.recipeNumPeople.value,
    form.recipeIngredient.value,
    form.recipeIngredientSize.value,
    form.recipeIngredientUnit.value,
    form.recipeImage.value
  );
  console.log("File: " + recipe.recipeImage);
  localStorage.setItem("recipe" + nextId, JSON.stringify(recipe));
  console.log("save");
  document.getElementById("recipeId").value = nextId;
}

function loadRecipes() {
  for (var i = 0; i < localStorage.length; i++) {
    let recipe = new Recipe();
    if (localStorage.key(i).includes("recipe")) {
      console.log(
        "Recipe from Local: " +
          JSON.parse(localStorage.getItem(localStorage.key(i)))
      );
      recipe = JSON.parse(localStorage.getItem(localStorage.key(i)));
      recipes.push(recipe);
    }
  }
  recipes.sort(function (a, b) {
    return a.id - b.id;
  });
  console.log(recipes);
  const container = document.getElementById("recipe-container");
  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList = "card";
    card.style = "width: 18rem";
    const content = `
    <div class="card" style="max-width: 18rem; min-width: 15rem">
          <img
            src="/images/puppy_circle_head.ico"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${recipe.title}</h5>
            <p class="card-text">
            ${recipe.description}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
  `;

    container.innerHTML += content;
  });
}

function addIngredient() {
  const content = `
  <div class="col-md-3">
              <label for="recipeIngredient" class="form-label"
                >Ingredient:</label
              >
              <input
                type="text"
                id="recipeIngredient"
                name="recipeIngredient"
                class="form-control"
              />
            </div>
            <div class="col-md-2">
              <label for="recipeIngredientSize" class="form-label"
                >Amount:</label
              >
              <input
                type="text"
                id="recipeIngredientSize"
                name="recipeIngredientSize"
                class="form-control"
              />
            </div>
            <div class="col-md-1">
              <label for="recipeIngredientUnit" class="form-label">Unit:</label>
              <input
                type="text"
                id="recipeIngredientUnit"
                name="recipeIngredientUnit"
                class="form-control"
              />
            </div>`;
}
