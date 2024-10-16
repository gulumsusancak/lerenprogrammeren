let nummer1=10;
let nummer2=5;
let operatie="optellen";
let resultaat;

switch (operatie){
    case "optellen":
        resultaat=nummer1+nummer2;
        break;
    case "aftrekken":
        resultaat=nummer1-nummer2;
        break;
    case "vermeningvuldiging":
        resultaat=nummer1*nummer2;
        break;
    case "deling":
        if (nummer2!==0){
            resultaat=nummer1/nummer2;
        }
        else {
            resultaat="ik kan niet delen door 0";
        }
        resultaat=nummer1/nummer2;
        break;

    default:
        resultaat="ongeldige operatie";
}
console.log(resultaat);