// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// genero un array di 5 numeri diversi casuali tra 1 e 99
const daIndovinare = [];
numsGen(daIndovinare, 5, 1, 99);
console.log('numeri da indovinare', daIndovinare);

// stampo i numeri in pagina
const container = document.getElementById('container');
container.innerHTML = daIndovinare;

// faccio partire un timer da 30 secondi
const userNums = [];
setTimeout((num) => {

    // passati 30 secondi chiedo all'utente per 5 volte un numero da indovinare
    for (let i = 0; i < 5; i++) {
        num = parseInt(prompt('Inserisci un nuemero'));

        // pusho i numeri inseriti in un array
        userNums.push(num);
    }
    console.log("nuemri inseriti dall'utente", userNums);
}, 30000);

// confronto i due array
// se trovo numeri uguali li stampo in pagina