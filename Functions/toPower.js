import displayExpression from "./displayExpression.js";

export default function toPower(expression, screen) {
  if (expression.length === 0) {
    expression = ["(", "0", ")", "^"];
  } else {
    expression = ["(", ...expression, ")", "^"];
  }
  displayExpression(expression, screen);
  return expression;
}
