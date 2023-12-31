import addToExpression from "./Functions/addToExpression.js";
import changeSign from "./Functions/changeSign.js";
import clearScreen from "./Functions/clearScreen.js";
import DEGtoRAID from "./Functions/degToRaid.js";
import displayExpression from "./Functions/displayExpression.js";
import FE from "./Functions/FE.js";
import genralFunctions from "./Functions/genralFunctions.js";
import memoryFunction from "./Functions/memoryFunctions.js";
import remove from "./Functions/remove.js";
import root from "./Functions/root.js";
import submit from "./Functions/Submit.js";
import toPower from "./Functions/toPower.js";
import trignomertyFunctions from "./Functions/trignomertyFunctions.js";

let expression = [];
let memory = [];
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

Array.from(document.getElementsByClassName("trignomertyFunctions")).map(
  (element) =>
    element.addEventListener("click", (e) => {
      expression = trignomertyFunctions(e.target.innerText, expression, screen);
    })
);

Array.from(document.getElementsByClassName("genralFunctions")).map((element) =>
  element.addEventListener("click", (e) => {
    expression = genralFunctions(e.target.innerText, expression, screen);
  })
);

Array.from(document.getElementsByClassName("memorybutton")).map((element) =>
  element.addEventListener("click", (e) => {
    try {
      let r = memoryFunction(e.target.innerText, expression, memory, screen);
    } catch (error) {
      alert(error);
    }
  })
);

document.getElementById("ten-pow").addEventListener("click", () => {
  expression = addToExpression("ten-pow", expression, screen);
});

document.getElementById("DEG").addEventListener("click", () => {
  expression = DEGtoRAID(expression, screen);
});
document.getElementById("FE").addEventListener("click", () => {
  expression = FE(expression, screen);
});

document.getElementById("x-pow-y").addEventListener("click", () => {
  expression = toPower(expression, screen);
});

document.getElementById("root").addEventListener("click", () => {
  expression = root(expression, screen);
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
document.getElementById("submit").addEventListener("click", () => {
  expression = submit(expression, screen);
});
