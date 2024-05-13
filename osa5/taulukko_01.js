// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ["Jukka", "Emilia", "Miikka", "Saara"];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Kirjoita koodisi tähän:
teamMembers.forEach((member) => console.log(member));
//=======================================================
// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Kirjoita koodisi tähän:
teamMembers.shift();
console.log(teamMembers);

//=======================================================
// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Kirjoita koodisi tähän:
teamMembers.splice(3);
console.log(teamMembers);

//=======================================================
// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Kirjoita koodisi tähän:
teamMembers.unshift("Aleksi");
console.log(teamMembers);

//=======================================================
// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Kirjoita koodisi tähän:
teamMembers.push("Linda");
console.log(teamMembers);

//=======================================================
// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Kirjoita koodisi tähän:
let x = teamMembers.splice(0, 2);
console.log(x);

//=======================================================
// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Kirjoita koodisi tähän:
console.log(teamMembers.indexOf("Miikka"));

//=======================================================
// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Kirjoita koodisi tähän:
console.log(teamMembers.indexOf("Jaako"));

//=======================================================
// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// Kirjoita koodisi tähän:
console.log(teamMembers);
teamMembers.splice(2, 1, "Karoliina", "Bettina");
console.log(teamMembers);

//=======================================================
// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// Kirjoita koodisi tähän:
teamMembers.push("Hemmo");
let y = teamMembers.slice();
console.log(y);

//=======================================================
// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// Kirjoita koodisi tähän:
let x = teamMembers.slice();
console.log(x);

//=======================================================
// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
// Oletetaan, että `newMembers`-taulukko on määritelty
let newMembers = ["Tiina", "Daniel"];
//Kirjoita koodisi tähän:
console.log(teamMembers.concat(newMembers));

//=======================================================
// Harjoitus 13: Etsi kaikki Jukan esiintymät
// Kirjoita koodisi tähän:
console.log(teamMembers.find((x) => x == "Jukka"));

//=======================================================
// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Kirjoita koodisi tähän:
console.log(teamMembers.map((x) => x.toUpperCase()));
//=======================================================
