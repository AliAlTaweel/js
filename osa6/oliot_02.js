/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `kirjasto`, joka edustaa kirjojen kokoelmaa.
Jokaisella kirjalla tulisi olla ominaisuudet `otsikko`, `kirjailija` ja `julkaisuvuosi`.
Lisää ainakin kaksi kirja-oliota tähän kokoelmaan.
*/
// Sinun koodisi tähän
let kirjasto = [
  {
    otsikko: "A",
    kijaillija: "Sami",
    julkaisuvuosi: 2012,
  },
  {
    otsikko: "B",
    kijaillija: "Satu",
    julkaisuvuosi: 2020,
  },
];
// ====================================================================================
/* Tehtävä 2
Käytä `kirjaston` ensimmäisen kirjan `otsikko`-ominaisuutta ja tulosta se konsoliin.
Muuta toisen kirjan `julkaisuvuotta` uuteen vuoteen kokoelmassa ja kirjaa päivitetty kirja-olio konsoliin.
*/
// Sinun koodisi tähän
 console.log(kirjasto[0].otsikko);
kirjasto[1].julkaisuvuosi = 2024;
console.log(kirjasto[1].julkaisuvuosi);
// ====================================================================================
/* Tehtävä 3
Käytä pistenotaatiota lisätäksesi uuden ominaisuuden `lajityypit` (merkkijonotaulukko) ensimmäiseen kirjaan `kirjasto`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-ominaisuuden `onSaatavilla` samaan kirjaan, ilmaisten sen saatavuuden.
*/
// Sinun koodisi tähän
kirjasto[0].lajityypit = "Satu";
console.log(kirjasto[0]);
kirjasto[1]["onSaatavilla"] = true;
console.log(kirjasto[1]);

// ====================================================================================
/* Tehtävä 4
Määritä konstruktorifunktio nimeltä `Kirja`, joka voi luoda uusia kirja-olioita ominaisuuksilla `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit`.
Käyttäen `Kirja`-konstruktoria, luo uusi kirja-olio annetuilla syöttöarvoilla ja lisää se `kirjasto`-kokoelmaan.
*/
// Sinun koodisi tähän
class kirja {
  constructor(otsikko, kirjailija, julkaisuvousi, lajityypit) {
    this.otsikko = otsikko;
    this.kirjailija = kirjailija;
    this.julkaisuvousi = julkaisuvousi;
    this.lajityypit = lajityypit;
  }
}
const book_1 = new kirja("AAA", "Sami", "2012", "Satu");
const book_2 = new kirja("BBB", "Annu", "2000", "Dekkari");
kirjasto.push(book_1);
kirjasto.push(book_2);
console.log(kirjasto);
// ====================================================================================
/* Tehtävä 5
Kirjoita funktio nimeltä `luoKirja`, joka ottaa parametrit `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit` (taulukko).
Funktion tulisi palauttaa uusi kirja-olio näillä ominaisuuksilla.
Testaa `luoKirja`-funktiota luomalla uusi kirja-olio käyttäjän antamilla syötteillä ja kirjaa uusi kirja-olio konsoliin.
*/
// Sinun koodisi tähän
function luoKirja(otsikko, kirjailija, julkaisuvousi, lajityypit) {
  const kirja = {
    otsikko: otsikko,
    kirjailija: kirjailija,
    julkaisuvousi: julkaisuvousi,
    lajityypit: lajityypit,
  };
  return kirja;
}
console.log(luoKirja("CCC", "Ahmed", "2000", "lapsille"));
// ====================================================================================
/* Tehtävä 6
Muunna `kirjasto`-kokoelma JSON-merkkijonoksi ja kirjaa se konsoliin.
Tee JSON-merkkijonosta JavaScript-olio ja kirjaa ensimmäisen kirjan otsikko konsoliin.
*/
// Sinun koodisi tähän
const jsonkirjasto = JSON.stringify(kirjasto);
console.log(jsonkirjasto)
