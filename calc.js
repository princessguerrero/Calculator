var outputDiv;

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/'];
var operations = ['add', 'sub', 'mul', 'div']

/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp) {
  try {
    return eval(mathExp)
  } catch (e) {
    return NaN
  }
}

document.addEventListener('DOMContentLoaded', function () {
  outputDiv = document.getElementById('output');
  // var withResult
  document.addEventListener('click', function (event) {
    var elementInnerText = event.target.innerText;
    var lastChar = outputDiv.innerText[outputDiv.innerText.length - 1]

  //to clear the screen
    if (elementInnerText === 'C') {
      outputDiv.innerText = ''
  //to make the computation
    } else if (elementInnerText === '=') {
      outputDiv.innerText = calculate(outputDiv.innerText)
  //if an operator is clicked AND the last character in the outputDiv is not an operator, append it OR if a number is clicked, append it.
    } else if (operators.includes(elementInnerText) && !operators.includes(lastChar) || numbers.includes(elementInnerText)) {
      outputDiv.innerText += elementInnerText;
    } 
    // logging the element id for debug purposes
    console.log(elementInnerText)

  })
})