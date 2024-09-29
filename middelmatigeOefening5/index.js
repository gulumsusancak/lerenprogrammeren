//Print de veelvouden van een gegeven getal: Vraag een getal aan de gebruiker en print de veelvouden van dat getal tot 100.

let getal=parseInt(prompt("Geef een getal in:"));
let veelvouden=0;

for (let i=1 ; i<=getal ; i++){
    veelvouden=getal*i;

    if (veelvouden<=100){
    console.log(`${getal} x ${i} = ${veelvouden}`);
    }
    else{
        break;
    }
}
