// som van de fibonacci reeks

let n=parseInt(prompt("voer het aantaal fibonacci getallen in:"));
let a=1,b=1, som=a+b;

for (let i=3; i<=n;i++){
      let volgende=a+b;
      som+=volgende;
      a=b;
      b=volgende;
}
console.log(som);

//!!