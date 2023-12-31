import displayExpression from "./displayExpression.js";

export default function addToExpression(param, expression, screen) {
  expression.push(helper(param));
  displayExpression(expression, screen);
  return expression;
}

function helper(params) {
  switch (params) {
    case "substraction":
      return "-";
    case "multiplication":
      return "*";
    case "plus":
      return "+";
    case "division":
      return "/";
    case "n!":
      return "fact(";
    case "log":
      return "log(";
    case "ln":
      return "ln(";
    case "ten-pow":
      return "10^";
    default:
      return params;
  }
}
