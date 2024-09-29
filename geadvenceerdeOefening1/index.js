//Print priemgetallen: Gebruik een for-loop om alle priemgetallen tussen 1 en 100 te printen
//priemgetallen: deelbaar door 1 en zichzelf

//**

//let priemgetal=1;

//for (let i=2;i<=100;i++){

  //  if (priemgetal%1===0 && priemgetal%i===0){
      //  console.log(priemgetal);
    //}

//}
//werkt nog niet!!


for (let i=2; i<=100;i++){
    let isPrime=true;
    for (let j=2;j<i;j++){
        if (i%j===0){
            isPrime=false;
            break;
        }
    }
    if (isPrime){
        console.log(i);
    }
}