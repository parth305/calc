let expression = [];
displayExpression();
function addToExpression(param) {
  expression.push(param);
  displayExpression();
}

function changeSign() {
  if (isNaN(expression.join(""))) {
    if (
      expression[0] === "-" &&
      expression[1] === "(" &&
      expression[expression.length - 1] === ")"
    ) {
      expression.splice(0, 2);
      expression.pop();
    } else {
      expression = ["-", "(", ...expression, ")"];
    }
  } else {
    console.log(expression);
    if (Number(expression.join("")) < 0) {
      expression.splice(0, 1);
    } else if (Number(expression.join("")) > 0) {
      expression = ["-", ...expression];
    }
  }
  displayExpression();
}

function displayExpression() {
  let screen = document.getElementById("screen");
  if (expression.length === 0) {
    screen.value = "0";
  } else {
    console.log(expression);
    screen.value = expression.join("");
  }
}

function clearScreen() {
  expression = [];
  displayExpression();
}

function remove(){
    expression.pop()
    displayExpression()
}