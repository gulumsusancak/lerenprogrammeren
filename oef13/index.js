
let aantal = parseInt(prompt("Geef aantal in:"));
let product = parseFloat(prompt("Geef de prijs in:"));

let totaleprijs=product*aantal;

if (totaleprijs>=100)
{
    let korting=totaleprijs * 0.10;
    totaleprijs = totaleprijs - korting;
    console.log("Je krijgt 10 korting! Het totale bedrag is: €" + totaleprijs.toFixed(2));
}

else if (totaleprijs>=50 && totaleprijs<=100)
{
    let korting=totaleprijs*0.5;
    totaleprijs=totaleprijs-korting;
    console.log("Je krijgt %5 korting! Het totale bedrag is: €" + totaleprijs.toFixed(2));
}

else
{
    console.log("Je krijgt geen korting. Het totale bedrag is: €" + totaleprijs.toFixed(2));
}
