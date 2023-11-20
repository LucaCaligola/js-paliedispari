// Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
// Dichiariamo chi ha vinto.




const pariOdispari = prompt("scegli pari o dispari");
const numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));



console.log(numeroUtente)


function numeroRandom (minNumber, maxNumber) {
    const numeroComputer = (Math.floor(Math.random() * (maxNumber - minNumber  + 1) + minNumber));
    return numeroComputer;
}



let somma = (numeroUtente + (numeroRandom(1,5)));

console.log(numeroRandom(1,5));
console.log(somma);

























// Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// E' vietato usare split(), reverse() e simili.