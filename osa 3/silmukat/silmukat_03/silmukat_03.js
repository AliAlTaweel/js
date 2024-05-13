// Luo ohjelma, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden
// (kilometreinä) ja ajan (tunteina) ja laskee sitten keskinopeuden.
//Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
//Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä.
// Tehdään tämä opettajan esimerkkinä
let etaisyys, aika;
/*
etaisyys = Number(prompt("syötä etäsisyys kilometreina"));
if (etaisyys == 0) {
  document.write("Sinä syötit nolla etaisyys");
} else {
  aika = prompt("syötä aika tunteina");

  let keskinopeus = etaisyys / aika;
  document.write(`Keskinopeus: ${keskinopeus} km/h`);
}
*/
while (etaisyys !== 0) {
  etaisyys = Number(prompt("syötä etäsisyys kilometreina"));
  if (etaisyys === 0) {
    console.log("Sinä syötit nolla etaisyys");
    break;
  }
  aika = Number(prompt("syötä aika tuntina"));
  console.log(`Keskinopeus: ${(etaisyys / aika).toFixed(1)} km/h`);
}
