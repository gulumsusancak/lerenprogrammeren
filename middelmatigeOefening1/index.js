//Print machten van 2: Gebruik een for-loop om de machten van 2 te printen, beginnend bij 1, totdat de macht groter is dan 1000.







let macht=2;

for (let i=1 ; i<=1000 ; i++ ){
    macht*=2;

    if (macht>1000){
        break;
    }
    console.log(macht);
}
