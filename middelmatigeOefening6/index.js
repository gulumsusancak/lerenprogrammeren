//Som van de even getallen: Gebruik een for-loop om de som van de even getallen van 1 tot 100 te berekenen.

let som=0;

for (let i=1;i<=100;i++){

    if (i%2===0){

        som=som+i;
    }

}
console.log(som);