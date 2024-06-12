//L'utente deve scegliere fra pari e dispari ed inserire un numero fra 1 e 5;
// Seleziona tutti i pulsanti all'interno del div con la classe 'container'
const buttons = document.querySelectorAll('.container button');
        
// Variabile per memorizzare il contenuto del pulsante cliccato
let clickedButtonContent = '';

// Funzione che verrà chiamata quando un pulsante viene cliccato
function handleButtonClick(event) {
    // Leggi il contenuto (testo) del pulsante cliccato
    clickedButtonContent = event.target.textContent;
    
    // Stampa il contenuto del pulsante cliccato nella console
    console.log('Contenuto del pulsante cliccato:', clickedButtonContent);

    // Qui puoi riutilizzare la variabile 'clickedButtonContent' come preferisci
}

// Aggiungi un event listener a ciascun pulsante
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

//Generiamo un numero random(1 a 5) per il computer usando una funzione;

//Dichiarare il vincitore;