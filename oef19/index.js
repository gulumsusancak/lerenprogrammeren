//geef een getal in:100
//1,2,4,8,16,32,64

let output="";
let getal=parseInt(prompt("Geef een getal in:"));

for (let i=1; i<=getal; i=i*2)
{
    if (i*2<getal){
        output= output+`${i},`;
    }
    else{
        output= output+`${i}`;
    }


}
console.log(output);