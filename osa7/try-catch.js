"use strict";

// Tehtävä 1: Perus Try-Catch käyttö
/*
Kääri koodi try-catch-lohkoon mahdollisten virheiden käsittelyä varten.
Tulosta 'Hups, jotain meni pieleen!' catch-lohkossa konsoliin.
*/

function task1(x) {
  // Simuloi virhe
  if (x == 2) throw new Error("Hups, jotain meni pieleen!");
  console.log("Ok");
}

try {
  task1(2);
} catch (err) {
  console.log("Error message : ", err.message);
}

//=========================================================
// Tehtävä 2: ReferenceErrorin käsittely
/*
Yritä käyttää määrittelemätöntä muuttujaa try-lohkossa.
Käsittele ReferenceError ja tulosta se konsoliin.
*/

function task2() {
  // Koodi tässä
  return x;
}
console.log(task2());

//=========================================================
// Tehtävä 3: Finallyn käyttö
/*
Käytä try-catch-finally-lohkoa. Finally-lohkossa tulosta 'Suoritus päättyi'.
*/

function task3() {
  // Koodi tässä
  try {
    console.log("try");
  } catch (err) {
    console.log("catch", err);
  } finally {
    console.log("Suoritus päättyi");
  }
}
task3();

//=========================================================
// Tehtävä 4: Sisäkkäinen Try-Catch
/*
Sisäkkäisessä try-lohkossa on toinen try-catch-lohko.
Simuloi virhe sisäkkäisessä try-lohkossa ja käsittele se sisäkkäisessä catch-lohkossa.
*/

function task4(x) {
  // Koodi tässä

    try {
      if (x == 3)
        try {
          return b;
        } catch (err) {
          console.log("Nested catch :", err.message);
        }
    } catch (erro) {
      console.log("outer catch", erro.message);
    }
}
task4("f");

//=========================================================
// Tehtävä 5: Funktio Try-Catchilla
/*
Luo funktio, joka käyttää try-catchia käsittellessään taulukon indeksin ulkopuolista virhettä.
*/

function task5(taulukko, indeksi) {
  // Koodi tässä
  try {
    if (indeksi > taulukko.length) {
      throw new Error("indeksin ulkopuolista virhettä");
    }
  } catch (err) {
    console.log("Error :", err.message);
  }
}
const x = ["A", "B", "C"];
let indeksi = 5;
task5(x, indeksi);
//=========================================================
