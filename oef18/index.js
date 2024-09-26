//00,01,02...99


let output="";

for (let nummer=0;nummer<=99;nummer++){
    if (nummer<=9)
    {
        output=output+`0${nummer},`;
        //console.log(`0${nummer},`);
    }
    else if (nummer<99) {
        //console.log(`${nummer},`);
        output=output+`${nummer},`;
    }
    else{
        output=output+`${nummer}`;
    }

}

console.log(output);