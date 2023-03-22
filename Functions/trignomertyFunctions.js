import displayExpression from "./displayExpression.js";

export default function trignomertyFunctions(params,expression,screen){
    expression.push(helper(params));
    displayExpression(expression, screen);
    return expression;
}

function helper(params){
    switch (params) {
        case "sin":
          return "sin(";
        case "cos":
          return "cos(";
        case "tan":
          return "tan(";
        case "sinh":
          return "sinh(";
        case "cosh":
          return "cosh(";
        case "tanh":
          return "tanh(";
      }
}