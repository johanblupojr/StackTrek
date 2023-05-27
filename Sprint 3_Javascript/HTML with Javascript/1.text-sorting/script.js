// Array to store the words
var words = [];
var originalOrder = []; // Store the original order of words

// Function to add a word to the list
function addWord() {
  var wordInput = document.getElementById('word-input');
  var word = wordInput.value.trim();

  if (word !== '') {
    words.push(word);
    originalOrder.push(word); // Add word to the original order array
    displayWords();
    wordInput.value = '';
  }
}

// Function to display the words on the screen
function displayWords() {
  var wordList = document.getElementById('word-list');
  wordList.innerHTML = '';

  for (var i = 0; i < words.length; i++) {
    var li = document.createElement('li');
    li.textContent = words[i];
    wordList.appendChild(li);
  }
}

// Function to sort the words
function sortWords() {
  words.sort();
  displayWords();
}

function unsortWords() {
  words = originalOrder.slice(); 
  displayWords();
}

document.getElementById('add-button').addEventListener('click', addWord);
document.getElementById('sort-button').addEventListener('click', sortWords);
document.getElementById('unsort-button').addEventListener('click', unsortWords);