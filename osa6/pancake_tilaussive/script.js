"use strict";
let sele = document.getElementById("nuts");
let tyyppit = document.getElementById("tyyppit");
let nimi = document.getElementById("nimiIn");
let tilausNimi = document.getElementById("tilausNimi");
let btn = document.getElementById("nimiBtn");
let lisukkeetText = document.getElementById("lisukkeet");
let extratText = document.getElementById("etxrat");
let orderDisplay = document.getElementById("orderPrice");

let tohinta = document.querySelectorAll("#totalPrice");
let selecOption = document.getElementById("type");
let customizSction = document.querySelectorAll(
  '.customization-section input[type="checkbox"]'
);

let totalHinta = 0;
let basicHinta = 0;
let lisaaHinta = 0;
let tyyppitext = [];
let lisukkeet = [];
let extrat = [];

//========= resetfunction ======
function resetfunction() {
  orderDisplay.innerHTML = `0€`;
  tilausNimi.innerHTML = "";
  lisukkeetText.innerHTML = "";
  extratText.innerHTML = "";
  tyyppit.innerHTML = "";
}
//========= funciton 1==========

function func_1() {
  basicHinta = 0;
  resetfunction();
  tyyppit.innerHTML = "";
  basicHinta += parseInt(selecOption.value);
  for (let i = 0; i < selecOption.length; i++) {
    if (selecOption[i].value == selecOption.value) {
      tyyppitext = selecOption[i].textContent;
    }
  }
  updateHinta();
}
//========= funciton 2==========
function func_2(x) {
  lisaaHinta = 0;
  resetfunction();
  lisukkeet = [];
  extrat = [];
  customizSction.forEach(function (checkbox) {
    if (checkbox.checked) {
      lisaaHinta += parseInt(checkbox.value);
      lisukkeetText.innerHTML = "";
      extratText.innerHTML = "";

      if (checkbox.value == 1) {
        lisukkeet.push(checkbox.id);
      }
      if (checkbox.value > 1) {
        extrat.push(checkbox.id);
      }
    }
  });
  updateHinta();
}
//========= func_btn ==========
function func_btn() {
  tilausNimi.innerHTML = nimi.value;
  lisukkeetText.innerHTML = lisukkeet.join(`, `);
  extratText.innerHTML = extrat.join(`, `);
  tyyppit.innerHTML = tyyppitext;
  orderDisplay.innerHTML = `${totalHinta}€  Kiitos`;
}

//=====Summa S===========
function updateHinta() {
  totalHinta = basicHinta + lisaaHinta;
  tohinta.forEach((x) => (x.innerHTML = `${totalHinta}€`));
}
//=====Summa E===========

selecOption.addEventListener("change", func_1);

customizSction.forEach(function (r) {
  r.addEventListener("change", func_2);
});
btn.addEventListener("click", func_btn);
