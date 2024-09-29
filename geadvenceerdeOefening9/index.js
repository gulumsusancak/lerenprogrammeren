//Controleer of een getal een priemgetal is: Vraag een getal aan de gebruiker en gebruik
// een for-loop om te controleren of het een priemgetal is.

//priemgetallen: deelbaar door 1 en zichzelf

let getal=parseInt(prompt("voer een priemgetal in:"));
let isPrime=true;

for (let i=2;i<getal;i++){
      if (getal%i===0){
            isPrime=false;
            break;
      }
}
if (isPrime){
      console.log(getal + " is een priemgetal");
}
else{
      console.log(getal + " is geen priemgetal");
}