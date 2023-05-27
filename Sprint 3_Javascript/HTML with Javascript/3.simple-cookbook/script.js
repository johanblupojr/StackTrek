// Function to add an ingredient
function addIngredient() {
  var ingredientInput = document.getElementById("ingredient-input");
  var ingredient = ingredientInput.value.trim();
  if (ingredient !== "") {
    var ingredientList = document.getElementById("ingredients-list");
    var listItem = document.createElement("li");
    listItem.textContent = ingredient;
    ingredientList.appendChild(listItem);
    ingredientInput.value = "";
  }
}

// Function to add an instruction
function addInstruction() {
  var instructionInput = document.getElementById("instruction-input");
  var instruction = instructionInput.value.trim();
  if (instruction !== "") {
    var instructionList = document.getElementById("instructions-list");
    var listItem = document.createElement("li");
    listItem.textContent = instruction;
    instructionList.appendChild(listItem);
    instructionInput.value = "";
  }
}

// Function to save a recipe
function saveRecipe() {
  var recipeNameInput = document.getElementById("recipe-name");
  var recipeName = recipeNameInput.value.trim();
  var ingredientsList = Array.from(
    document.querySelectorAll("#ingredients-list li")
  ).map((item) => item.textContent);
  var instructionsList = Array.from(
    document.querySelectorAll("#instructions-list li")
  ).map((item) => item.textContent);

  if (recipeName !== "") {
    var recipeList = document.getElementById("recipe-list");
    var listItem = document.createElement("li");
    var recipeLink = document.createElement("a");
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
  var recipeDetails = document.getElementById("recipe-details");
  var recipeDetailsHTML = "<h3>" + recipeName + "</h3>";
  recipeDetailsHTML += "<strong>Ingredients:</strong><br>";
  recipeDetailsHTML += "<ul>";
  for (var i = 0; i < ingredientsList.length; i++) {
    recipeDetailsHTML += "<li>" + ingredientsList[i] + "</li>";
  }
  recipeDetailsHTML += "</ul>";
  recipeDetailsHTML += "<strong>Instructions:</strong><br>";
  recipeDetailsHTML += "<ol>";
  for (var j = 0; j < instructionsList.length; j++) {
    recipeDetailsHTML += "<li>" + instructionsList[j] + "</li>";
  }
  recipeDetailsHTML += "</ol>";

  recipeDetails.innerHTML = recipeDetailsHTML;
}

// Function to clear a list
function clearList(listId) {
  var list = document.getElementById(listId);
  while (list.firstChild) {
    list.firstChild.remove();
  }
}

// Event listeners
document
  .getElementById("add-ingredient-btn").addEventListener("click", addIngredient);
document
  .getElementById("add-instruction-btn").addEventListener("click", addInstruction);
document
  .getElementById("save-recipe-btn").addEventListener("click", saveRecipe);
