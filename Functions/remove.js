import displayExpression from "./displayExpression.js";

export default function remove(expression,screen) {
    expression.pop();
    displayExpression(expression,screen);
    return expression
  }