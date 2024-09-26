/*
* ITERATIES
*
* for loop
* */

//for(startwaarde;conditie;startwaarde manipuleren){ }

//**let eindgetal=parseInt(prompt("geef eeen eindgetal in:"));
//let i= 1;
//for(i;i<=eindgetal;i++)
//{
  //  console.log(`dit is nummer ${i}`)
//}
//for(i;i>0;i--){  }


//for (let a=1;a<=20;a++);
//{
  //  if(a%2===0){
    //    console.log(a);
//    }
//}




//output: tafel van 1
//1x1=1, 1x2=2, 1x3=3..

let tafel=parseInt(prompt("wat is de tafel:"));
let eindgetal=parseInt(prompt("geef het eindgetal:"));

for (let i=1;i<=eindgetal;i++){
    console.log(`${tafel} x ${i} =`,tafel*i);
}

