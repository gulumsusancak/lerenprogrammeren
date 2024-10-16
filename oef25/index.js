/*
* schrijf een programma die ervoor zorgt dat je ieder derde getal in een reeks 2x weergeeft en ieder reeel 10de getal in een reeks weglaat maar wel een spatie schrijft
* de gebruiker geeft het eindgetal in
* voorbeeld van de output:
* 1,2,3,3,4,5,6,6,7,8,9,...11,99
* */

let result = '';
let eindgetal = parseInt(prompt("geef het eindgetal in:"));

for (let i = 1; i <= eindgetal; i++) {
    if (i % 10 === 0) {
        result += ' ';
    } else if (i % 3 === 0) {
        result += i + ',' + i;
    } else {
        result += i;
    }
    if (i !== eindgetal && i % 10 !== 0) {
        result += ',';
    }
}
console.log(result);





























