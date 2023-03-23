import displayExpression from "./displayExpression.js";

export default function genralFunctions(params, expression, screen) {
  expression = helper(params, expression);
  console.log(expression);
  displayExpression(expression, screen);
  return expression;
}

function helper(params, expression) {
  switch (params) {
    case "exp":
      return [...expression, "e^"];
    case "mod":
      if (expression.length === 0) {
        return ["0", "%"];
      }
      return [...expression, "%"];
    case "rand":
      return [...expression, (Math.floor(Math.random() * 1000) + 1).toString()];
    case "X2":
      if (expression.length === 0) {
        return ["(", "0", ")", "^2"];
      }
      return ["(", ...expression, ")", "^2"];
    case "1/X":
      if (expression.length === 0) {
        return ["1", "/", "(", "0", ")"];
      }
      return ["1", "/", "(", ...expression, ")"];
    case "|X|":
      if (expression.length === 0) {
        return ["abs(",  "0", ")"];
      }
      return ["abs(",  ...expression, ")"];
  }
}
