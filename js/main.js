// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// genero un array di 5 numeri diversi casuali tra 1 e 99
const daIndovinare = [];
numsGen(daIndovinare, 5, 1, 99); // in utility.js
console.log('numeri da indovinare', daIndovinare);

// stampo i numeri in pagina
const numeri = document.getElementById('numeri');
const titolo = document.getElementsByTagName('h2')[0];
titolo.innerHTML = 'Memoriza questi numeri in 30 secondi:';
numeri.innerHTML = daIndovinare;

// cancello i numeri dalla pagina poco prima dello scadere dei 30 secondi  
setTimeout(() => {
    titolo.innerHTML = 'Numeri indovinati:'
    numeri.innerHTML = '';
}, 29990);

// faccio partire un timer da 30 secondi
const indovinati = [];
setTimeout((num) => {
    
    // passati 30 secondi chiedo all'utente per 5 volte un numero da indovinare
    for (let i = 0; i < 5; i++) {
        num = parseInt(prompt('Inserisci un numero'));

        // se il numero è tra quelli da indovinare lo pusho nel nuovo array

        // if (daIndovinare.includes(num)) {
        //     indovinati.push(num);
        // }

        daIndovinare.includes(num) ? indovinati.push(num): null;
    }

    // stampo in pagina l'array dei numeri indovinati
    numeri.innerHTML = indovinati;
    console.log("numeri inseriti dall'utente", indovinati);
}, 30000);
