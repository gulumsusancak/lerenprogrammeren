//Print getallen die deelbaar zijn door 3:
// Gebruik een for-loop om getallen van 1 tot 30 te printen die deelbaar zijn door 3.

let resultaat="";
for (let i=1;i<=30;i++){
        if (i%3===0){
                resultaat+=i+" ";
        }
}

console.log(resultaat)


