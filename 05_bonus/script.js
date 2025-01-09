/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function hello(personName, currentHour) {

    if (currentHour <= 13) {
        return `Buongiorno ${personName}`;
    }
    else if (currentHour <= 17) {
        return `Buon Pomeriggio ${personName}`;
    }
    else {
        return `Buonasera ${personName}`;
    };
}


// Invoca la funzione qui e stampa il risultato in console

let currentHour = new Date().getHours();
console.log `Sono le ore: ${currentHour}`; 


hello(name);

console.log(hello(name));




//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.







// versione con arrow function

// const hello = (personName) => {
//     let currentHour = new Date().getHours();

//     if (currentHour <= 13) {
//         return `Buongiorno ${name}`;
//     }
//     else if (currentHour <= 17) {
//         return `Buon Pomeriggio ${name}`;
//     }
//     else {
//         return `Buonasera ${name}`;
//     };
// }


// hello(name);

// console.log(hello(name));