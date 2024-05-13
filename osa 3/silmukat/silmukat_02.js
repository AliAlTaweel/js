//Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99
// välillä, esittäen ne seuraavalla tavalla
//2, 98, 4, 96, 6, 94 ja niin edelleen. Tulosta luvut samalle riville.

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
    if (i != 50) console.log(100 - i);
  }
}

/*
let s = " ";
for (let i = 0; i < 29; i++) {
  s += i + " , ";
}
console.log(s);
console.log(typeof s);
*/
