// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const scelta = prompt('Digita 1 per pari e 2 per dispari');
const numero = parseInt(prompt('Scegli ora un numero da 1 a 5'));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

// DEBUG
console.log(generaNumeroRandom());

// Verificare che il numero inserito dall'utente sia valido
if (numero >= 1 && numero <= 5) {
    // Generare un numero random
    const numeroRandom = generaNumeroRandom();

    // Sommare i due numeri
    const somma = numero + numeroRandom;

    // Mostrare i risultati
    console.log('Numero inserito dall\'utente:', numero);
    console.log('Numero random generato:', numeroRandom);
    console.log('Somma dei due numeri:', somma);

    // Mostrare la somma all'utente
    alert('La somma del tuo numero e del numero generato è: ' + somma);
} else {
    alert('Per favore, inserisci un numero valido compreso tra 1 e 5.');
}

    // Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// Dichiariamo chi ha vinto.
    //Controlliamo la scelta dell'utente
    if(scelta === 1) {
        console.log('Pari');
    } else if(scelta == 2) {
        console.log('dispari');
    } else {
        alert('La scelta non è valida!');
    }
    //Se la scelta è = alla somma dei due numeri il giocatore ha vinto, altrimenti no.
