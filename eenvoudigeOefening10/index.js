//Print de tafel van een gegeven getal: Vraag een getal aan de gebruiker en gebruik een for-loop om de tafel van dat getal te printen.

let getal=parseInt(prompt("Geef een getal in:"));
let tafel=0;

for (let i=1;i<=10;i++){
        tafel=getal*i;
        console.log(`${getal} x ${i} = ${tafel}` );
}
