//scrijft een programma dat de bmi van een gebruiker berekent van hun lengte en gewicht
//formule bmi=gewicht/(lengte*lengte)

//ondergewicht: BMI<18.5
//normaal: 18.5<=BMI<25
//overgewicht: 25<=BMI<30
//obese: BMI>30

let lengte= parseFloat(prompt("Geef je lengte in (m):"));
let gewicht= parseFloat(prompt("Geef je gewicht in (kg):"));
let bmi=gewicht/(lengte*lengte);

console.log(bmi);

if (bmi<18.5){
    console.log(`Je BMI is ${bmi.toFixed(2)}. Je bent ondergewicht.`); //tofixed (22.2457878 naar 22.24)
}
else if (bmi<=18.5 && bmi<25){
    console.log(`Je BMI is ${bmi.toFixed(2)}. Je bent normaalgewicht.`);
}
else if (bmi<=25 && bmi<30){
    console.log(`Je BMI is ${bmi.toFixed(2)}. Je bent overgewicht.`);
}
else{
    console.log(`Je BMI is ${bmi.toFixed(2)}. Je hebt obesitas.`);
}