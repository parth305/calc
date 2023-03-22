import displayExpression from "./displayExpression.js";

export default function changeSign(expression,screen) {
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
      if (Number(expression.join("")) < 0) {
        expression.splice(0, 1);
      } else if (Number(expression.join("")) > 0) {
        expression = ["-", ...expression];
      }
    }
    displayExpression(expression,screen);
    return expression
  }