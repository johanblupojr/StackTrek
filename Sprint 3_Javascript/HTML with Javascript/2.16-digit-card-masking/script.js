function maskCard() {
  var cardInput = document.getElementById("card-input");
  var cardNumber = cardInput.value.trim();

  // Check if the input is a valid 16-digit number; Mask the number if valid
  if (cardNumber.length === 16 && /^\d{16}$/.test(cardNumber)) {
    var maskedCard = cardNumber.replace(/(\d{4})(\d{8})(\d{4})/,"$1 **** **** $3");
    var maskedCardDisplay = document.getElementById("masked-card");
    maskedCardDisplay.textContent ="Masked Card Number: " + maskedCard;
  } else if (cardNumber.length > 16) {
    alert("Card number should not exceed 16 digits.");
  } else {
    alert("Card number should be 16 digits long.");
  }
}

// Function to unmask the card number
function unmaskCard() {
  var cardInput = document.getElementById("card-input");
  var cardNumber = cardInput.value.trim();
  var unmaskedCard = cardNumber.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
  var maskedCardDisplay = document.getElementById("masked-card");
  maskedCardDisplay.textContent = "Unmasked Card Number: " + unmaskedCard;
}

document.getElementById("mask-button").addEventListener("click", maskCard);
document.getElementById("unmask-button").addEventListener("click", unmaskCard);
