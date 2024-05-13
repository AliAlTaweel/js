//Tee ohjelma, joka tulostaa kaikki parittomat numerot 1 ja 100 välillä.
//Eli 1, 3, 5, 7, 9, 11 jne.

for (let i = 1; i <= 100; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) count++;
  }
  if (count <= 2) console.log(i);
}
