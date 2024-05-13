/* 
Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän napille.

Kun nappia klikataan, funktion tulisi:
- Hakea arvo syötekentästä.
- Luoda uusi <li> elementti ja asettaa sen tekstisisältö syötekentän 
arvoksi.
- Lisätä uusi <li> elementti hedelmälistan <ul>-elementtiin.

Varmista, että syötekenttä tyhjennetään hedelmän lisäämisen jälkeen.
*/

function funct_1() {
  let newText = document.getElementById("fruitInput");

  if (newText.value) {
    let newLi = document.createElement("li");
    newLi.textContent = newText.value;
    let ulElem = document.getElementById("fruitList");
    ulElem.appendChild(newLi);
    newText.value = "";
  } else {
    alert("lisää hedelmän nimi, kiitos");
  }
}

let myBtn = document
  .getElementById("addFruitBtn")
  .addEventListener("click", funct_1);
