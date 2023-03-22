import addToExpression from "./Functions/addToExpression.js";
import changeSign from "./Functions/changeSign.js";
import clearScreen from "./Functions/clearScreen.js";
import displayExpression from "./Functions/displayExpression.js";
import remove from "./Functions/remove.js";

let expression = [];
const screen = document.getElementById("screen");
displayExpression(expression, screen);

Array.from(document.getElementsByClassName("addToExpression")).map((element) =>
  element.addEventListener("click", (e) => {
    expression = addToExpression(e.target.innerText, expression, screen);
  })
);

Array.from(document.getElementsByClassName("ASMD")).map((element) =>
  element.addEventListener("click", (e) => {
    expression = addToExpression(e.target.name, expression, screen);
  })
);

document.getElementById("factorial").addEventListener("click", () => {
  expression = addToExpression("factorial",expression, screen);
});



document.getElementById("changesign").addEventListener("click", () => {
  expression = changeSign(expression, screen);
});
document.getElementById("clearScreen").addEventListener("click", () => {
  expression = clearScreen(expression, screen);
});
document.getElementById("remove").addEventListener("click", () => {
  expression = remove(expression, screen);
});



