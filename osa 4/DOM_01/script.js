/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä 
getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön
 painamalla nappia tekstiksi "Hei, maailma!".
*/

function funktio_1() {
  let elemintti = document.getElementById("content");
  elemintti.innerHTML = "Hei maailma";
}
