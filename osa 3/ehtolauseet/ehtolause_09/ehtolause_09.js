/**Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua.
 * Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma
 * antaa satunnaisen vastauksen 8-pallosta. Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja
 * näyttämään yksi useista ennalta määritellyistä vastauksista.
 * */

let esimerkki = prompt("Laitta sinun kysymys");

let kysymys = String(esimerkki);

let x = Math.floor(Math.random() * 20);
console.log(x);

switch (x) {
  case 1:
    document.write(" option 1");
    break;
  case 2:
    document.write(" option 2");
    break;
  case 3:
    document.write(" option 3");
    break;
  case 4:
    document.write(" option 4");
    break;
  case 5:
    document.write(" option 5");
    break;
  case 6:
    document.write(" option 6");
    break;
  case 7:
    document.write(" option 7");
    break;
  case 8:
    document.write(" option 8");
    break;
  case 9:
    document.write(" option 9");
    break;
  case 10:
    document.write(" option 10");
    break;
  case 11:
    document.write(" option 11");
    break;
  case 12:
    document.write(" option 12");
    break;
  case 13:
    document.write(" option 13");
    break;
  case 14:
    document.write(" option 14");
    break;
  case 15:
    document.write(" option 15");
    break;
  case 16:
    document.write(" option 16");
    break;
  case 17:
    document.write(" option 17");
    break;
  case 18:
    document.write(" option 18");
    break;
  case 19:
    document.write(" option 19");
    break;
  case 20:
    document.write(" option 20");
    break;
}
