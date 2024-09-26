// let, var, const
//let blockscope, var universeel, const is een vaste waarde

//DATATYPES
let getal = 5; //de output zal dus een nummer zijn
let tekst = "Tom";
let keuze= 1; // 1 = true, 0 = false // BOOLEAN!!

let strNum= "123";
strNum = parseInt(strNum); //kommegetallen = parseFloat

let strNum1= "123";
strNum1 = parseInt(strNum1);

let resultaat = strNum+strNum1;
    console.log(typeof(resultaat));

    let persoon = {
        name: "Jane",
        age:30,
        isStudent:false,
        haarkleur:"bruin"

    }
    console.log(typeof(persoon));
    console.log(persoon.name);

    let familienaam = "Sancak";
    let geboortejaar= 2000;
    let huidigejaar= 2024;
    let jaar= (huidigejaar-geboortejaar);

    console.log(jaar);

    //het resultaat van Sancak is 24 jaar.

// het resultaat van familienaam is 24

//het jaar van familienaam is jaar.

//ES5 Notatie
console.log("het resultaat van" , familienaam , "is" , jaar);
//ES6 Notatie backtick operator)
console.log(`het resultaat ${familienaam} van is ${jaar}`);

//oefening

let getal1= parseInt(prompt("Voer je eerste getal in"));
let getal2= parseInt(prompt("Voer je tweede getal in"));

console.log(getal1+getal2);
console.log(getal1*getal2);
console.log(getal1/getal2);
console.log(getal1-getal2);

console.log(`${getal1}  + ${getal2} = ${getal1+getal2}`);
console.log(`${getal1}  * ${getal2} = ${getal1*getal2}`);
console.log(`${getal1}  / ${getal2} = ${getal1/getal2}`);
console.log(`${getal1}  - ${getal2} = ${getal1-getal2}`);
console.log(`${getal1}  ** ${getal2} = ${getal1**getal2}`);
console.log(`${getal1}  % ${getal2} = ${getal1%getal2}`);

let getal5= 5;
getal5+=1;//shorthand +1
console.log(getal5);

//5=="5" = T
//5==="5" = F

console.log(5=="5");
console.log(5==="5");


