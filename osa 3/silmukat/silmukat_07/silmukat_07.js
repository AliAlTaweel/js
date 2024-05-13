//Tee ohjelma, joka kysyy kymmentä numeroa.
//Ohjelma laskee ja tulostaa summan ja keskiarvon sekä
//tulostaa pienimmän ja suurimman numeron.

let num = [];
let max;
let min;
let laske = 0;
let count = 0;
let summan = 0;

alert("syötät kunmminta numorja");
for (let i = 0; i < 10; i++) {
<<<<<<< HEAD
  let x = Number(prompt("syöttää numroja"));
  if (!isNaN(x)) {
    num[i] = x;
    summan += num[i];
    count++;
  }
=======
  num[i] = Number(prompt("syöttää numroja"));
  summan += num[i];
  count = i;
>>>>>>> 1e6f3e54797d8feee94b88cdc6102d516815f19a
}
max = Math.max(...num.filter((v) => v != null || v != undefined));
min = Math.min(...num.filter((v) => v != null));
/*max = num[0];
min = num[0];

for (let i = 0; i < 10; i++) {
  if (max < num[i]) max = num[i];
  if (min > num[i]) min = num[i];
}*/

console.log("Nomerot ", num);
console.log("Mix =", max);
console.log("Min =", min);
console.log("Summa = ", summan);
console.log("keskiarvon =", summan / count);
