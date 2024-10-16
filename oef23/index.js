let teRadenGetal=7;
let ingevoerdeGetal= parseInt(prompt("raad het getal:"));
let aantal=0;

while(teRadenGetal!==ingevoerdeGetal)
{

    if (ingevoerdeGetal<teRadenGetal){
        console.log("groter raden");
        ingevoerdeGetal=parseInt(prompt("raad het getal:"));
        aantal++;
    }
    else {
        console.log("kleiner raden");
        ingevoerdeGetal=parseInt(prompt("raad het getal:"));
        aantal++;
    }
}
console.log("je hebt juist geraden");
