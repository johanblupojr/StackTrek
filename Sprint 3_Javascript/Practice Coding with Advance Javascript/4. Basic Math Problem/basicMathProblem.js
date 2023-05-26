// function basicmath(word) {
//     var words = word.split(" ");
//     var operatorMap = {
//       plus: "+",
//       minus: "-",
//       times: "*",
//       "divided by": "/",
//     };
//     var num1 = parseFloat(words[0]);
//     var operator = operatorMap[words[1]];
//     var num2 = parseFloat(words[2]);
//     if (words.length !== 3) {
//       return null;
//     }
//     if (isNaN(num1) || isNaN(num2) || !operator) {
//       return null;
//     }
  
//     var result;
//     switch (operator) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         result = num1 / num2;
//         break;
//       default:
//         return null;
//     }
  
//     return result;
//   }
  
//   // Example usage
//   var input = "10 divided by 11 ";
//   var output = basicmath(input);
//   console.log(output); // Output: 2

function basicmath(word) {
    var operatorMap = {
      plus: "+",
      minus: "-",
      times: "*",
      "divided by": "/",
    };
    var trimmedWords = word.trim();
    var words = trimmedWords.split(" ");
    var num1 = parseFloat(words[0]);
    var num2 = parseFloat(words[words.length-1]);
    var operator;
  
    for (var operatorValue in operatorMap) {
      if (word.includes(operatorValue)) {
        operator = operatorMap[operatorValue];
        break;
      }
    }
    if (operator === null || isNaN(num1) || isNaN(num2)) {
        if (!isNaN(num1) && !isNaN(num2)) {
          return null;
        } else {
          return "None";
        }
      }
    var result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return null;
    }
  if (result == Infinity || result == NaN){
    return null;
  } else{
    return result.toFixed(2);
}
  }

  console.log(basicmath("  1 divided by 0  "));