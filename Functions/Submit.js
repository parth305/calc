import displayExpression from "./displayExpression.js";

export default function submit(expression, screen) {
  expression = [eval(calculate(expression))];
  displayExpression(expression, screen);
  return expression;
}

function calculate(expression) {
  let str = "";
  for (let i = 0; i < expression.length; i++) {
    let iterator = expression[i];
    switch (iterator) {
      case "π":
        str += Math.PI.toString();
        break;
      case "e":
        str += Math.E.toString();
        break;
      case "e^":
        str += Math.E.toString().concat("**");
        break;
      case "^2":
        str += "**2";
        break;
      // base 10
      case "log(":
        str += "Math.log10(";
        break;
      case "abs(":
        str += "Math.abs(";
        break;
      // base e
      case "ln(":
        str += "Math.log(";
        break;
      case "10^":
        str += "10**";
        break;
      case "^":
        str += "**";
        break;
      case "root(":
        str += "Math.sqrt(";
        break;
      case "fact(":
        let temp = ["("];
        let stack = ["("];
        i++;

        do {
          if (expression[i] === "(") {
            stack.push("(");
            temp.push("(");
            i++;
          } else if (expression[i] === ")") {
            stack.pop();
            if (stack.length !== 0) {
              i++;
            }
            temp.push(")");
          } else if (expression[i][expression[i].length - 1] === "(") {
            stack.push("(");
            temp.push(expression[i]);
            i++;
          } else {
            if (expression[i] !== undefined) {
              temp.push(expression[i]);
            }
            i++;
          }
        } while (stack.length !== 0);
        if (temp.length === 2 && temp[0] === "(" && temp[1] === ")") {
          str += "1";
        } else {
          let temp2 = Number(eval(calculate(temp)));
          str += Factorial(temp2);
        }
        break;

      case "sin(":
        str += "Math.sin(";
        break;
      case "cos(":
        str += "Math.cos(";
        break;
      case "tan(":
        str += "Math.tan(";
        break;
      case "sinh(":
        str += "Math.sinh(";
        break;
      case "cosh(":
        str += "Math.cosh(";
        break;
      case "tanh(":
        str += "Math.tanh(";
        break;
      case undefined:
        break;
      default:
        str += iterator;
        break;
    }
  }
  console.log(str);
  return str;
}

function Factorial(param) {
  let fact = 1;
  for (let i = 1; i <= param; i++) {
    fact *= i;
  }
  return fact;
}

// do {
//   if (expression[i] === "(") {
//     stack.push("(");
//     temp += expression[i];
//     i++;
//   } else if (expression[i] === ")") {
//     stack.pop();
//     temp += expression[i];
//     console.log("in second if",temp);
//     if (stack.length!==0) {
//       i++
//     }
//   } else {
//     if (expression[i] !== undefined) {
//       temp += expression[i];
//     }
//     i++;
//   }
//   console.log(expression[i],"here");
// } while (stack.length !== 0);
