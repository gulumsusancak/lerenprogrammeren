//Bereken de faculteit van een getal: Vraag een getal aan de gebruiker en gebruik een for-loop om de faculteit (factorial) van dat getal te berekenen.


//5! = 5 × 4 × 3 × 2 × 1 = 120
//0! = 1 uitzondering


let getal=parseInt(prompt("voer een getal in:"));
let faculteit=1;

for (let i=getal;i>0;i--){
    faculteit=faculteit*i;
}
console.log(faculteit);