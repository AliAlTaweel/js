/**
* Tätä ohjelmaa varten tarvitaan verkkosivua, eli se ei toimi pelkästään konsolissa.
* Joten tee ensin html sivu ja linkkaa tämä tiedosto siihen. Prompt-ikkuna aukeaa sivulle, testaa Live serverin avulla.
* Luo ohjelma getTemperature, joka kysyy käyttäjältä lämpötilaa Celsius-asteina ja sitten tulostaa, 
pitäisikö heidän pukea takki päälle (jos lämpötila on alle 15°C) vai ei.
*/
function getTemperature(temp) {
  if (isNaN(temp)) {
    document.write("varaa syöttö");
  } else if (temp < 15) {
    document.write("Laitta pukea päälle");
  } else {
    document.write("Älä laitta pukea päälle");
  }
}

let esimerkki = prompt("Mikä on nykyinen lämpötila?");

let numero = Number(esimerkki);

getTemperature(numero);

// Treenaa: Keksi itse samanlainen funktio eri nimellä

// Kutsu tekemääsi funktiota
