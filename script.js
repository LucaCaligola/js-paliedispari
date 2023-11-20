// Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
// Dichiariamo chi ha vinto.




const pariOdispari = prompt("scegli pari o dispari");
const numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));




function numeroRandom(minNumber, maxNumber) {
    const random = (Math.floor(Math.random() * (maxNumber - minNumber  + 1) + minNumber));
    console.log(random);
    return random;
}

const numeroComputer = numeroRandom(1,5);

let somma = numeroUtente + numeroComputer;


console.log(somma);

function oddOrEven(daVerificare, ){
    if (daVerificare % 2 === 0 ){
        return "even";
    }
    else {
        return "odd"
    }

} 

let result = oddOrEven(somma);

if (pariOdispari === result){
    console.log("YOU WIN!");
}

else {
    console.log("YOU LOSE!")
}

// function multiplo(daAnalizzare, multiploDi) {
//     if(daAnalizzare % multiploDi === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(multiplo(20, 5));


































// Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// E' vietato usare split(), reverse() e simili.