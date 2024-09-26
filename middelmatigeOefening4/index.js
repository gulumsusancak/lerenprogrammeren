//Som van de eerste n getallen: Vraag een getal n aan de gebruiker en bereken de som van de getallen van 1 tot n.

let getal=parseInt(prompt("geef een getal in:"));
let som=0;

for (let i=1;i<=getal;i++){
    som+=i;

}
console.log(`de som van getallen van 1 tot ${getal} is ${som}`);
