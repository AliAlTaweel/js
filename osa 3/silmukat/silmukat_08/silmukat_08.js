// Tee ohjelma, joka kysyy aluksi käyttäjältä,
//kuinka monta numeroa he haluavat syöttää.
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään
// jokainen näistä numeroista.
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja
//näyttää käyttäjän antamista numeroista pienin ja suurin.

let num = [];
let max = 0;
let min = 0;
let laske = 0;
let summan = 0;
let i = 0;

let nums = Number(prompt("kuinka numeroa sinä haluat syötät?"));
for (i; i < nums; i++) {
  num[i] = Number(prompt(` syöttää numro ${i + 1} :`));
  summan += num[i];
  laske = i;
}
alert(`Sinä syötät ${i} numeroa, kiitos`);
max = num[0];
min = num[0];

for (i = 0; i < nums; i++) {
  if (max < num[i]) max = num[i];
  if (min > num[i]) min = num[i];
}

console.log("Nomerot ", num);
console.log("Mix =", max);
console.log("Min =", min);
console.log("Summa = ", summan);
console.log("keskiarvon =", summan / laske);
