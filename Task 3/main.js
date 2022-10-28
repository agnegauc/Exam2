import { renderUserCards } from "./renderUserCards.js";

/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const users = await response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
};

const users = await getUsers();

document.body.querySelector("#btn").addEventListener("click", () => {
  renderUserCards(users);
});
