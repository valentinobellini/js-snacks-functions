/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function byInitials (listName, letter) {

    let lowerCaseLetter = letter.toLowerCase();
    let wordsByInitials = [];
    for (let i = 0; i < listName.length; i++) {
        
        // check se la parola ha come primo carattere il valore di letter
        if (listName[i][0].toLowerCase() === lowerCaseLetter) {
            wordsByInitials.push(listName[i]);
        }

    }
    return wordsByInitials;
}



// // Invoca la funzione qui e stampa il risultato in console

byInitials(names, "l");

console.log(byInitials(names, "l"));





//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


// versione con arrow functionù

// const byInitials = (listName, letter) => {
//     let lowerCaseLetter = letter.toLowerCase();
//     let wordsByInitials = [];
//     for (let i = 0; i < listName.length; i++) {
        
//         // check se la parola ha come primo carattere il valore di letter
//         if (listName[i][0].toLowerCase() === lowerCaseLetter) {
//             wordsByInitials.push(listName[i]);
//         }

//     }
//     return wordsByInitials;
// }


// byInitials(names, "l");

// console.log(byInitials(names, "l"));
