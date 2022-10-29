import cars from "./cars.json" assert { type: "json" };

/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const renderCarCards = (cars) => {
  const carsContainer = document.body.querySelector("#output");

  cars.forEach((car) => {
    const brand = document.createElement("h2");
    const models = document.createElement("p");
    const carCardContainer = document.createElement("div");

    brand.textContent = car.brand;
    models.textContent = car.models.join(", ");
    carCardContainer.setAttribute("class", "carCard");

    carCardContainer.append(brand, models);
    carsContainer.append(carCardContainer);
  });
};

renderCarCards(cars);
