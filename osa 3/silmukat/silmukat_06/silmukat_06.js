/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

let summa = 0;
let syöttä_num = 0;
let ensi_num = Number(prompt("syöttä yksi numero"));
syöttä_num++;
summa += ensi_num;

let käyttäjä_vaihtoehto = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");
if (käyttäjä_vaihtoehto == "k") {
  let toinen_num = Number(prompt(" syöttää toinen numero"));
  summa += toinen_num;
  syöttä_num++;
}
console.log(summa / syöttä_num);
console.log("syöttä", syöttä_num);
console.log("summa", summa);
