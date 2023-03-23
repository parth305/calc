import displayExpression from "./displayExpression.js";

export default function memoryFunction(params, expression, memory, screen) {
  try {
    helper(params, expression, memory);
    displayExpression(expression, screen);
  } catch (error) {
    expression.splice(0,expression.length)
    expression.push("Invalid Expression")
    displayExpression(expression,screen)
    return Error(error.message);
  }
}

function helper(params, expression, memory) {
  console.log(params);
  switch (params) {
    case "M+":
      if (isNaN(expression.join(""))) {
        throw Error("Invalid Expression");
      }
      memory.push("+");
      memory.push(...expression);
      break;
    case "M-":
      if (isNaN(expression.join(""))) {
        throw Error();
      }
      memory.push("-");
      memory.push(...expression);
      break;
    case "MR":
      expression.splice(0, expression.length);
      expression.push(eval(memory.join("")).toString());
      break;
    case "MC":
      memory.splice(0, memory.length);
      break;

    default:
      break;
  }
  console.log("memory", memory);
  console.log("expression", expression);
}
