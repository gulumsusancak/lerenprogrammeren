//hoeveel getallen?
//geef getal 1 in:.... getal 3:
//totale som van getallen?



let hoeveelGetallen=parseInt(prompt("hoeveel getallen?:"));
let getal;
let som=0;

for (let i=1;i<=hoeveelGetallen;i++){
    getal=parseInt(prompt(`geef getal ${i} in:`));
    som=som+getal;
}


console.log(`De totale som van ${hoeveelGetallen} getallen is ${som}`);