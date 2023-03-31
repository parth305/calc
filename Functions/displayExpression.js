/**
 * [Displays expressions on screen]
 * @param  {[Array]} expression
 * @param  {[Document]} screen 

 */
export default function displayExpression(expression, screen) {
  if (expression.length === 0) {
    screen.value = "0";
  } else {
    screen.value = expression.join("");
  }
}
