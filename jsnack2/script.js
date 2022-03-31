// array vuoto
var arrayNumeri = [];
let dispari = 0
console.log(arrayNumeri);

// chiedere all'utente di inserire 6 volte un numero e identificare se il numero è dispari dividendolo per 2
for(var i=0; i < 6; i++) {
    var numeroInseritoUtente = (prompt('inserisci un numero'));
    console.log (numeroInseritoUtente);
}
if (numeroInseritoUtente % 2 !=0) {
   console.log (dispari, numeroInseritoUtente);  
   arrayNumeri.push(numeroInseritoUtente);
}
console.log (arrayNumeri);