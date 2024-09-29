// Print de Fibonacci-reeks: Gebruik een for-loop om de eerste 10 getallen van de
// Fibonacci-reeks te printen (bijv. 1, 1, 2, 3, 5, 8, ...)

let a=1,b=1;
console.log(a);
console.log(b);
for (let i=3; i<=10;i++){
      let volgende=a+b;
      console.log(volgende);
      a=b;
      b=volgende;
}

//begrijp het totaal niet lol