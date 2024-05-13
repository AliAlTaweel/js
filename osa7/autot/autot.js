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
  const uusiAuto = new autot(rekisterinumero.value, valmistaja.value);
  console.log(uusiAuto.rekisterinumero);
  console.log(uusiAuto.valmistaja);
  kAutot.push(uusiAuto);
  console.log(kAutot);
  let newform = document.getElementById("newform");
  console.log(newform);
  // newDiv.innerHTML = " ";
  kAutot.forEach((car) => {
    let para = document.createElement("div");
    let text = document.createTextNode(car.rekisterinumero);
    para.appendChild(text);
    newform.appendChild(para);
  });

  // kAutot.forEach((car) => {
  //   const para = document.createElement("p");
  //   const text = document.createTextNode("Hello");
  //   para.appendChild(text);
  //   newDiv.appendChild(para);
  // });
}

form.addEventListener("submit", fun_1);

// const form = document.querySelector("form");
//       form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const name = document.querySelector("#name").value;
//         const lastname = document.querySelector("#lastname").value;
//         console.log(`Name: ${name} Last Name: ${lastname}`);
//         // Add your logic to send the data to the server or perform any other action
//       });
