import displayExpression from "./displayExpression.js";

export default function memoryFunction(params, expression, memory, screen) {
  try {
    helper(params, expression, memory);
    displayExpression(expression, screen);
    if (memory.length === 0) {
      document.getElementById("mc").classList.add("memorydisable");
      document.getElementById("mr").classList.add("memorydisable");
    } else {
      document.getElementById("mr").classList.remove("memorydisable");
      document.getElementById("mc").classList.remove("memorydisable");
    }
  } catch (error) {
    expression.splice(0, expression.length);
    expression.push("Invalid Expression");
    displayExpression(expression, screen);
    return Error(error.message);
  }
}

function helper(params, expression, memory) {
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
      if (memory.length !== 0) {
        expression.splice(0, expression.length);
        expression.push(eval(memory.join("")).toString());
      }
      break;
    case "MC":
      if (memory.length !== 0) {
        memory.splice(0, memory.length);
      }
      break;

    default:
      break;
  }
}
