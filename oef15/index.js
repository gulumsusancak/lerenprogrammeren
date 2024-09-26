//schrijf een programma dat het gemiddelde van de getallen van 1 tot en met 10 berekent.

//1+2+3+4+5+6+7+8+9+10=55/10=5.5

let getal=parseInt(prompt("Geef een getal in:"));
let i=1;
let som=0;
let resultaat=0;

for (i;i<=getal;i++){
    som=som+i;
}
resultaat= som/getal;
console.log(resultaat);