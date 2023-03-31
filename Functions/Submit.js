import calculate from "./Calculate.js";
import displayExpression from "./displayExpression.js";

export default function submit(expression, screen) {
  try {
    expression = [eval(calculate(expression))];
  } catch (error) {
    expression = ["Invalid Expression"];
  }
  if (expression[0] === 0 || expression[0] === -0) {
    expression = [];
  }
  displayExpression(expression, screen);
  return expression;
}
