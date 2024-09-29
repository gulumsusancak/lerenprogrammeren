//print getallen die een bepaald patroon volgen: Print de getallenreeks 1, 2, 4, 8, 16, 32, ..., totdat de waarde groter is dan een door de gebruiker opgegeven getal.

//1+1=2  2+2=4  4+4=8  8+8=16

let limiet=parseInt(prompt("getal?"));


for (let i=1 ; i<limiet ; i=i*2){
    let som=i+i;

        console.log(`${i} + ${i} = ${som} `);


}
