/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// // Dichiara la funzione qui.

function wordInitials (namesList) {
    const initials = [];
    for (let i = 0; i < namesList.length; i++) {
        initials.push(namesList[i][0]);
    }
    return initials;
}


// // Invoca la funzione qui e stampa il risultato in console

wordInitials(names);

console.log(wordInitials(names));




//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


// //versione con arrow function

// const wordInitials = (namesList) => {
//     const initials = [];
//     for (let i = 0; i < namesList.length; i++) {
//         initials.push(namesList[i][0]);
//     }
//     return initials;
// }

// console.log(wordInitials(names));