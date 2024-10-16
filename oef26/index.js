/**
 * een  perfect getal. Je geeft een eindgetal in. Je controleert alle getallen tussen 1 en het eindgetal of deze een perfect getal is.
 * Perfect getal is een positief natuurlijk getal die gelijk is aan de som van zijn echte delers.
 */

let eindgetal = prompt("Voer het eindgetal in:");

console.log("Perfecte getallen tussen 1 en " + eindgetal + ":");

for (let i = 1; i <= parseInt(eindgetal, 10); i++) {
    let som = 0;

    // Zoek alle delers van i (behalve i zelf)
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            som += j;
        }
    }

    // Controleer of de som van de delers gelijk is aan het getal zelf
    if (som === i) {
        console.log(i);
    }
}