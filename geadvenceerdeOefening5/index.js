//Tel de cijfers in een getal: Vraag een getal aan de gebruiker en gebruik een for-loop om het aantal cijfers in dat getal te tellen.

let number=parseInt(prompt("voer een getal in:"));
let count=0;

for (let i=number ; i>0 ; i= ( i-(i%10) ) /10 ){
      count++;
}
console.log(count);

//!!!!!!