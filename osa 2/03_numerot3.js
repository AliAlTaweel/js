/*
- Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
- Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.

- Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.
- Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
- Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.

- Käytä console.log() -funktiota tulostamaan 'roundedNum1', 'roundedNum2', 'sqrtNum1' ja 'maxNum' konsoliin.
- Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin ja tulosta tulos käyttäen console.log().
*/

let num1 = 25.73;
let num2 = 4.27;

let roundedNum1 = Math.floor(num1);
let roundedNum2 = Math.floor(num2);

console.log("Num1 : ", num1);
console.log("Num2 : ", num2);
console.log("===========================");
console.log("round Num1 : ", roundedNum1);
console.log("round Num2 : ", roundedNum2);
console.log("===========================");

let squrnum1 = Math.sqrt(roundedNum1);
let squrnum2 = Math.sqrt(roundedNum2);
console.log("===========================");

console.log("round1 squar root is : ", squrnum1);
console.log("round1 squar root is : ", squrnum2);
console.log("===========================");

let maxNum = Math.max(squrnum1, squrnum2);
console.log("Max number is : ", maxNum);
console.log("===========================");
