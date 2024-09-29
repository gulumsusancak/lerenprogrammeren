//Print de kwadraten van getallen: Gebruik een for-loop om de kwadraten van de
// getallen van 1 tot 10 te printen (bijv. 1, 4, 9, 16, ..., 100).

let kwadraat=0;

for (let i=1;i<=100;i++){
    kwadraat=i*i;
    if (kwadraat>100){
        break;
    }
    console.log(kwadraat);
}