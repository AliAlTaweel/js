let rekisterinumero = document.getElementById("rekNumro");
let valmistaja = document.getElementById("valmistaja");
let malli = document.getElementById("malli");
let nykyise = document.getElementById("nykyise");
let omistaja = document.getElementById("omistaja");
let hinta = document.getElementById("hinta");
let vari = document.getElementById("vari");
let btn = document.getElementById("btn");
let form = document.querySelector("#form");
let kAutot = [];

class autot {
  constructor(
    rekisterinumero,
    valmistaja,
    malli,
    nykyise,
    omistaja,
    hinta,
    vari
  ) {
    this.rekisterinumero = rekisterinumero;
    this.valmistaja = valmistaja;
    this.malli = malli;
    this.nykyise = nykyise;
    this.omistaja = omistaja;
    this.hinta = hinta;
    this.vari = vari;
  }
}
function fun_1(event) {
  event.preventDefault();
  const uusiAuto = new autot(
    (rekisterinumero.value = "No Value"),
    (valmistaja.value = "-"),
    (malli.value = "-"),
    (nykyise.value = "-"),
    (omistaja.value = "-"),
    (hinta.value = "-"),
    (vari.value = "-")
  );

  kAutot.push(uusiAuto);

  const tableRows = document.querySelector("#tbody");
  tableRows.innerHTML = "";

  kAutot.forEach((car) => {
    let row = document.createElement("tr");

    let cel1 = document.createElement("td");
    cel1.textContent = car.rekisterinumero;
    row.appendChild(cel1);

    let cel2 = document.createElement("td");
    cel2.textContent = car.valmistaja;
    row.appendChild(cel2);

    let cel3 = document.createElement("td");
    cel3.textContent = car.malli;
    row.appendChild(cel3);

    let cel4 = document.createElement("td");
    cel4.textContent = car.nykyise;
    row.appendChild(cel4);

    let cel5 = document.createElement("td");
    cel5.textContent = car.omistaja;
    row.appendChild(cel5);

    let cel6 = document.createElement("td");
    cel6.textContent = car.hinta;
    row.appendChild(cel6);

    let cel7 = document.createElement("td");
    cel7.textContent = car.vari;
    row.appendChild(cel7);

    tbody.appendChild(row);
  });
}

form.addEventListener("submit", fun_1);
