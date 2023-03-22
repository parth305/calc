import displayExpression from "./displayExpression.js";

export default function clearScreen(expression,screen) {
    expression = [];
    displayExpression(expression,screen);
    return expression
  }