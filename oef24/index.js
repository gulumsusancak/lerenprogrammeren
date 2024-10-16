//100 => 1, 4, 16, 256
//5000 => 1, 4, 16, 256,

let getal=parseInt(prompt("geef een getal:"));
let i=1;

while(i<=getal) {
console.log(i);

    if (i === 1)
    {
        i*=4;
    }
    else
    {
        i=i**2;
    }
}
