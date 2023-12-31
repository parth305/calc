import calculate from "./Calculate.js";
import displayExpression from "./displayExpression.js";

export default function FE(expression, screen) {
  try {
    let t = calculate(expression);
    let temp = eval(t);
    expression = [Number.parseFloat(temp).toExponential(5).toString()];
  } catch (error) {
    expression = ["Invalid Expression"];
  }
  displayExpression(expression, screen);
  return expression;
}
