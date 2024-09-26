//Maak een programma dat drie cijferst van een gebruiker accepteert en het grootste van drie weergeeft.
//De 3 variabelen mogen gewoon gedeclareerd worden. Bvb nr1=5, nr2=6..

let nr1 =parseInt(prompt("Voer eerste getal in:"));
let nr2 =parseInt(prompt("Voer tweede getal in:"));
let nr3 =parseInt(prompt("Voer derde getal in:"));

if (nr1>=nr2 && nr1>=nr3){
    console.log(`${nr1} is groter dan ${nr2} en ${nr3}`);
}
else if (nr2>=nr1 && nr2>=nr3){
    console.log(`${nr2} is groter dan ${nr1} en ${nr3}`);
}
else {
    console.log(`${nr3} is groter dan ${nr1} en ${nr2}`);
}

//kortere optie
//let grootste =Math.max(nr1,nr2,nr3);
//console.log("${grootste} is grootste");
