// chiedere mail all'utente e controllare se può accedere , generare poi un numero random tra 1 e 6 sia per il giocatore che per il computer, vince chi fa il punteggio più alto

// chiediamo la mail all'utente 
const mail = prompt('inserisci la tua mail')
console.log(mail);

// controllo mail

const listaMails = ['mario.rossi@gmail.com', 'luca.verde@gmail.com',
 'fabio66@gmail.com', 'gigi.mobile11@gmail.com', 'roberto59@gmail.com']

for (let i = 0; i < listaMails.length; i++){
    if (mail == listaMails[i]){
        // creazione numeri random
        const number_player = Math.floor(Math.random() * 6) + 1;
        const number_computer= Math.floor(Math.random() * 6) + 1;
        console.log(number_player)
        console.log(number_computer);
        // controllo numeri per stabilire vincitore
        if(number_player > number_computer) {
            console.log('hai vinto')
        } else if (number_computer > number_player){
            console.log('hai perso');
        } else {
            console.log('pareggio');
        }
    }
}
// messaggio errore inserimento mail
if (mail != listaMails[0] && mail != listaMails[1] && mail != listaMails[2] && mail != listaMails[3] && mail != listaMails[4]){
    console.log('Errore nell\'inserimento della mail')
}