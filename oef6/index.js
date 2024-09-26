//oefening 1
//nationale loterij


let leeftijd= prompt("Geef uw leeftijd in:");

if(leeftijd<18){
    console.log("Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn");
}
else{
    console.log(`Je bent ${leeftijd} jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.`)
    let vakjes=prompt("Hoeveel vakjes wil je spelen?");

    if(vakjes==="12") {
        console.log("Kostprijs 20 euro");
    }
    else if(vakjes==="2"){
        console.log("Kostprijs 4 euro");
    }

    else if(vakjes==="4"){
        console.log("Kostprijs 8 euro");
    }

    else if(vakjes==="6"){
        console.log("Kostprijs 12 euro");
    }
    else if(vakjes==="8"){
        console.log("Kostprijs 16 euro");
    }
    else{
        console.log("Geef aub een geldige vakjes in!");
    }
}

