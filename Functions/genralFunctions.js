import displayExpression from "./displayExpression.js";

export default function genralFunctions(params,expression,screen){
    expression=helper(params,expression);
    displayExpression(expression, screen);
    return expression;
}

function helper(params,expression){
    switch (params) {
        case "exp":
          return expression.push("e^");
        case "mod":
          return expression.push("%");
        case "rand":
          return expression.push((Math.floor(Math.random()*1000)+1).toString());
        case "X2":
          return ["(",...expression,")","^2"];
        case "1/X":
          return ["1","/","(",...expression,")"];
        case "|X|":
          return ["abs","(",...expression,")"];
      }
}