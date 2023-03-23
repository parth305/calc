import calculate from "./Calculate.js";
import displayExpression from "./displayExpression.js";

export default function DEGtoRAID (expression,screen){
    try {
        let t=calculate(expression)
        let temp=eval(t);
        expression=[(180*temp/Math.PI).toString()]
      } catch (error) {
        expression=["Invalid Expression"]
      }
    displayExpression(expression,screen)
    return expression
}