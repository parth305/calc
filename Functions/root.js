import displayExpression from "./displayExpression.js";

export default function root(expression, screen) {
  if (expression.length === 0) {
    expression = ["root(", "0", ")"];
  } else {
    expression = ["root(", ...expression, ")"];
  }
  displayExpression(expression, screen);
  return expression;
}
