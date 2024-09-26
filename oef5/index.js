//Voorbeeld 2: Beroep op basis van gebruikersinvoer
//De gebruiker wordt gevraagd hun naam en beroep in te voeren. Afhankelijk van de invoer toont het programma een aangepast bericht.
//Dit is een voorbeeld van een if - else if - else structuur waarin meerdere condities worden gecontroleerd


let naam = prompt('Geef uw naam in:');

let beroep = prompt('Geef uw beroep in, maak een keuze: bediende, arbeider, werkzoekend');


if(beroep==="bediende")
{
    console.log(`${naam} is een bediende`);
}

else if(beroep==="arbeider")
{
    console.log(`${naam} is een arbeider`);
}
else
{
    console.log(`${naam} is een werkzoekend`);
}