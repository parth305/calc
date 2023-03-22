import displayExpression from "./displayExpression.js";

export default function submit(expression, screen) {
  expression = [eval(calculate(expression))];
  displayExpression(expression, screen);
  return expression;
}

function calculate(expression) {
  let str = "";
  for (let i=0;i<expression.length;i++) {
    let iterator=expression[i]
    switch (iterator) {
      case "π":
        str += Math.PI.toString();
        break;
      case "e":
        str += Math.E.toString();
        break;
      // base 10
      case "log(":
        str += "Math.log10(";
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
        let temp=""
        i++
        do{
            if (expression[i]!==")" && expression[i]!==undefined) {
                temp+=expression[i]
            }
            i++
        }while (expression[i]!==")")
        let temp2=Number(eval(temp))
        str += Factorial(temp2);
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
  