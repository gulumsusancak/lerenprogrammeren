//Maak een programma dat een nummer invoert en controleert of het deelbaar is door 3 en 5 of door geen van beide

let getal=parseInt(prompt("Geef een getal in:"));

if (getal%3===0 && getal%5===0)
{
    console.log(`${getal} is zowel door 3 als 5 deelbaar.`);
}
else if(getal%3===0){
    console.log(`${getal} is enkel deelbaar door 3.`);
}

else if(getal%5===0){
    console.log(`${getal} is enkel deelbaar door 5.`);
}

else{
   console.log(`${getal} is niet deelbaar door 3 en 5`);
}


