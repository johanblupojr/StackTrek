// Function to add an ingredient
function addIngredient() {
  let ingredientInput = document.getElementById("ingredient-input");
  let ingredient = ingredientInput.value.trim();
  if (ingredient !== "") {  // Check if 'ingredient' is not an empty let
    let ingredientList = document.getElementById("ingredients-list");
    let listItem = document.createElement("li");
    listItem.textContent = ingredient; //sets the content of 'listItem' to the value stored in the 'ingredient' let
    ingredientList.appendChild(listItem); //the new list item will be added to the end of the ingredient list
    ingredientInput.value = "";
  }
}

// Function to add an instruction
function addInstruction() {
  let instructionInput = document.getElementById("instruction-input");
  let instruction = instructionInput.value.trim();
  if (instruction !== "") {
    let instructionList = document.getElementById("instructions-list");
    let listItem = document.createElement("li");
    listItem.textContent = instruction;
    instructionList.appendChild(listItem);
    instructionInput.value = "";
  }
}

// Function to save a recipe
function saveRecipe() {
  let recipeNameInput = document.getElementById("recipe-name");
  let recipeName = recipeNameInput.value.trim();
  let ingredientsList = Array.from(
    document.querySelectorAll("#ingredients-list li")//Retrieve 'ingredients list' and convert it to array
  ).map((item) => item.textContent);
  let instructionsList = Array.from(
    document.querySelectorAll("#instructions-list li")
  ).map((item) => item.textContent);

  if (recipeName !== "") {
    let recipeList = document.getElementById("recipe-list");
    let listItem = document.createElement("li");
    let recipeLink = document.createElement("a");
    recipeLink.href = "#";
    recipeLink.textContent = recipeName;
    listItem.appendChild(recipeLink);
    recipeList.appendChild(listItem);
    recipeLink.addEventListener("click", function () {
      displayRecipeDetails(recipeName, ingredientsList, instructionsList);
    });
    recipeNameInput.value = "";
    clearList("ingredients-list");
    clearList("instructions-list");
  }
}

// Function to display recipe details
function displayRecipeDetails(recipeName, ingredientsList, instructionsList) {
  let recipeDetails = document.getElementById("recipe-details");
  let recipeDetailsHTML = "<h3>" + recipeName + "</h3>";
  recipeDetailsHTML += "<strong>Ingredients:</strong><br>";
  recipeDetailsHTML += "<ul>";
  for (let i = 0; i < ingredientsList.length; i++) {
    recipeDetailsHTML += "<li>" + ingredientsList[i] + "</li>";
  }
  recipeDetailsHTML += "</ul>";
  recipeDetailsHTML += "<strong>Instructions:</strong><br>";
  recipeDetailsHTML += "<ol>";
  for (let j = 0; j < instructionsList.length; j++) {
    recipeDetailsHTML += "<li>" + instructionsList[j] + "</li>";
  }
  recipeDetailsHTML += "</ol>";

  recipeDetails.innerHTML = recipeDetailsHTML;
}

// Function to clear a list
function clearList(listId) {
  let list = document.getElementById(listId);
  while (list.firstChild) {
    list.firstChild.remove();
  }
}

// Event listeners
document.getElementById("add-ingredient-btn").addEventListener("click", addIngredient);
document.getElementById("add-instruction-btn").addEventListener("click", addInstruction);
document.getElementById("save-recipe-btn").addEventListener("click", saveRecipe);
