let sele = document.getElementById("nuts");

let tohinta = document.querySelectorAll("#totalPrice");
let selecOption = document.getElementById("type");
let customizSction = document.querySelectorAll(
  '.customization-section input[type="checkbox"]'
);

let totalHinta = 0;
let basicHinta = 0;
let lisaaHinta = 0;
//========= funciton 1==========

function func_1() {
  basicHinta = 0;
  basicHinta += parseInt(selecOption.value);
  updateHinta();
}
//========= funciton 2==========
function func_2(x) {
  lisaaHinta = 0;
  customizSction.forEach(function (checkbox) {
    if (checkbox.checked) {
      lisaaHinta += parseInt(checkbox.value);
    }
  });
  updateHinta();
}
//=====Summa S===========
function updateHinta() {
  totalHinta = basicHinta + lisaaHinta;
  console.log(totalHinta);
  tohinta.forEach((x) => (x.innerHTML = totalHinta + "€"));
}
//=====Summa E===========

selecOption.addEventListener("change", func_1);

customizSction.forEach(function (r) {
  r.addEventListener("change", func_2);
});
