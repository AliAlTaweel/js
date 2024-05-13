/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa oleville tuotteille ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */
let tuotteHintat = [30.4, 20.03, 10.22, 90.99];

let määrä = [3, 5, 1, 0.4];

let yhdis = 0;
for (let i = 0; i < 4; i++) {
  yhdis = yhdis + tuotteHintat[i] * määrä[i];
}

console.log(yhdis);
