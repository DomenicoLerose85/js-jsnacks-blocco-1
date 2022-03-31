// test
// alert ('ciao')

// chiedi numero composto da 4 cifre a utente
let numeroQuattroCifreUtente = prompt ('Inserisci un numero composto da quattro cifre');
console.log(numeroQuattroCifreUtente);

// variabile

let somma = 0;

for (let i=0; i < numeroQuattroCifreUtente.length; i++){
    let somma = somma + parseInt(numeroQuattroCifreUtente [i]);
}

console.log(somma);
