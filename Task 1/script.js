/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// Input type in HTML was set to "text", I changed it to "number".

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const weightInKg = +document.querySelector("#search").value;
  const weightInLb = +(weightInKg * 2.2046).toFixed(2); // Added a plus here to avoid trailing .00
  const weightInG = +(weightInKg / 0.001).toFixed(2);
  const weightInOz = +(weightInKg * 35.274).toFixed(2);
  const displayResult = document.createElement("h2");

  document.querySelector("#output").replaceChildren();

  displayResult.textContent = `${weightInKg} kg is ${weightInLb} lb / ${weightInG} g / ${weightInOz} oz`;
  displayResult.style.border = "1px dotted gray";
  displayResult.style.maxWidth = "80%";
  displayResult.style.margin = "10px auto";
  displayResult.style.padding = "10px";

  document.body.querySelector("#output").append(displayResult);
});
