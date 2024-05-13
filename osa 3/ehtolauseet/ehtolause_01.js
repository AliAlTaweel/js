/**
Toteuta funktio canVote siten, että se palauttaa arvon true aina kun ikä on 18 tai enemmän ja false muissa tapauksissa.
*/

function canVote(age) {
  if (age >= 18) return true;
  else return false;
}
//vote

// Esimerkkikäyttö - älä muuta
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false

// Treenaa: Keksi itse samanlainen funktio eri nimellä

// Kutsu tekemääsi funktiota
