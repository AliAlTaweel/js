// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.

let syöttää;
let summa = 0;
let num_syöttä = 0;

do {
  syöttää = Number(prompt("syötät lukuvut"));
  summa += syöttää;
  num_syöttä++;
} while (syöttää != 0);

console.log(summa / num_syöttä);
