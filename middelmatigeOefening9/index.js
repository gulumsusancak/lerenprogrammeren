//Print getallen tussen 1 en n die deelbaar zijn door 5: Vraag een getal n aan de
// gebruiker en print alle getallen van 1 tot n die deelbaar zijn door 5.


let getal=parseInt(prompt("geef een getal in:"));

for (let i=1; i<=getal ; i++){
    if (i%5===0){
        console.log(`${i} is deelbaar door 5`);
    }
}