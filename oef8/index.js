//jaartal is schrikkeljaar of niet?
// deelbaar door 4, maar niet door 100, behalve als het deelbaar is door 400


//parseint voor script nummer maken
let jaar =parseInt(prompt("Geef een jaartal in:"));

//als het deelbaar is door 4 en niet door 100 is TRUE OF als het deelbaar is door 400 TRUE
if((jaar%4===0 && jaar%100!==0) || (jaar%400===0))  //! ==  !==
    {
    console.log(`${jaar} is een schrikkeljaar`);
}

else
{
    console.log(`${jaar} is geen schrikkeljaar`);
}


//scrijf een programma dat de gebruiker een getal laat invoeren en controleert of het even of oneven is (deelbaar door 2)

let getal=parseInt(prompt("Geef een getal in:"));

if (getal%2===0){
    console.log(`${getal} is een even getal`);
}
else{
    console.log(`${getal} is een oneven getal`);
}