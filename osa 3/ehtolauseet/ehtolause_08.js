/**
Kirjoita funktio nimeltä pluralize, joka:

Hyväksyy kaksi argumenttia: substantiivin ja numeron.
Palauttaa merkkijonon, joka yhdistää numeron ja sopivasti taipuvan muodon substantiivista, 
kuten '5 kissaa' tai '1 koira'.

 */

function pluralize(substantiivi, määrä) {
  if (määrä <= 1) return `${määrä} ${substantiivi}`;
  else return `${määrä} ${substantiivi}a`;
}

// Esimerkkikäyttö - älä muokkaa
console.log("Minulla on " + pluralize("kala", 1));
console.log("Minulla on " + pluralize("koira", 0));
console.log("Minulla on " + pluralize("papukaija", 7));

// Treenaa: Keksi itse samanlainen funktio eri nimellä.

// Kutsu tekemääsi funktiota
