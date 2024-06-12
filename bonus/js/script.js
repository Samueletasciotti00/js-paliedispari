// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const scelta = prompt('Digita 1 per pari e 2 per dispari');
    //Controlliamo la scelta dell'utente
    if(scelta == 1) {
        console.log('Pari');
    } else if(scelta == 2) {
        console.log('dispari');
    } else {
        alert('La scelta di pari o dispari non è valida!');
    }

const numero = parseInt(prompt('Scegli ora un numero da 1 a 5'));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

// Sommare i due numeri
function sommaNumeri(numero1, numero2) {
            return numero1 + numero2;
        }

// DEBUG
console.log(generaNumeroRandom());

// Verificare che il numero inserito dall'utente sia valido
if (numero >= 1 && numero <= 5) {
    // Generare un numero random
    const numeroRandom = generaNumeroRandom();

    //Diachiarare la somma
    const somma = sommaNumeri(numero, numeroRandom);

    // Mostrare i risultati
    console.log('Numero inserito dall\'utente:', numero);
    console.log('Numero random generato:', numeroRandom);
    console.log('Somma dei due numeri:', somma);

    // Mostrare la somma all'utente
    alert('La somma del tuo numero e del numero generato è: ' + somma);

    // In base alla scelta verificare se la somma corrisponde alla selezione.
    if(scelta == 1 && somma % 2 == 0) {
        console.log('hai vinto');
    } else if(scelta == 2 && somma % 2 !== 0) {
        console.log('hai vinto');
    } else {
        console.log('ha vinto il PC');
    }
// Dichiariamo chi ha vinto.


} else {
    alert('Per favore, inserisci un numero valido compreso tra 1 e 5.');
}