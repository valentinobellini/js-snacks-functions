/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function countVowels (argument) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < argument.length; i++) {
        if (vowels.includes(argument[i])) {
            count++;
        }
    }
    return count;
}


// // Invoca la funzione qui e stampa il risultato in console

countVowels(word);

console.log(countVowels(word));




//Risultato atteso se si passa 'javascript': 3 (a, a, i)


// versione con arrow function

// const countVowels = (argument) => {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let i = 0; i < argument.length; i++) {
//         if (vowels.includes(argument[i])) {
//             count++;
//         }
//     }
//     return count;
// }


// countVowels(word);

// console.log(countVowels(word));