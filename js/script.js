//Chiedere all utente di inserire una parola;
const parola = prompt('Inserisci una parola da verificare');
//Creare una funzione per capire se una parola è palidroma o meno;
function verificaParola(parola) {

    //Scompongo la parola in singole lettere;
    const parolaDivisa = parola.split('');
    console.log(parolaDivisa);

    // Invertire l'array delle lettere
    const parolaInversa = parolaDivisa.reverse().join('');
    console.log(parolaInversa);

    // Confrontare la parola originale con la parola invertita
    if (parola === parolaInversa) {
        console.log('La parola è palindroma.');
    } else {
        console.log('La parola non è palindroma.');
    }
}

verificaParola(parola);