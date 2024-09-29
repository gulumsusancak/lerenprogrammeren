// bereken de som van de cijfers in een getal

// 1234  1+2+3+4=10

//cijfers vinden:  i = (i % 10) / 10

let getal=parseInt(prompt("geef een getal in:"));
let som=0;

for (let i=getal; i>0 ; i= ( i- (i % 10) ) /10  ){
      som+=i%10;

}
console.log(som);