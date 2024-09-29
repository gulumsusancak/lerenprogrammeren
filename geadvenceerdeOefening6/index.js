// vind de grootste deler van een getal: Vraag een getal aan de gebruiker en gebruik een
// for-loop om de grootste deler van dat getal (ANDERS DAN GETAL ZELF) te vinden.

let getal=parseInt(prompt("getal?"));
let grootsteDeler=1;

for (let i=1 ; i<getal ; i++ )//grootste deler vinden die kleiner dan getal zelf is i<getal
{
      if (getal%i===0)
      {
            grootsteDeler=i;
      }
}
console.log(grootsteDeler);