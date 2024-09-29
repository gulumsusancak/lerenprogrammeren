//Print een driehoek van sterretjes: Gebruik een for-loop om een driehoek van sterretjes
// te printen, waarbij het aantal rijen door de gebruiker wordt opgegeven. Bijvoorbeeld,
// voor 5 rijen:

let rows=parseInt(prompt("voer het aantal rijen in:"));
for (let i=1 ; i<=rows ; i++ ){
      let line='';
      for (let j=1;j<=i;j++){
            line+='*';
      }
      console.log(line);
}