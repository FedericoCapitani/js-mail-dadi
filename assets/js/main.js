// chiedere mail all'utente e controllare se può accedere , generare poi un numero random tra 1 e 6 sia per il giocatore che per il computer, vince chi fa il punteggio più alto

// prendere la mail dall'utente
let controllo = document.getElementById('controllo')

const lista_mail = ['mario.rossi@gmail.com', 'luca.fragola@gmail.com', 'roberto78@gmail.com', 'franco.reti11@gmail.com', 'alex48.rieti@gmail.com']

// funzione per il controllo della mail
controllo.addEventListener('click', function(){
    mail = document.getElementById('mail').value;
    for (let i = 0; i < lista_mail.length; i++){
        if (mail == lista_mail[i]) {
           const messaggio_mail = document.getElementById('messaggio_mail')
           let bentornato = '<p> Bentornato </p>'
           messaggio_mail.insertAdjacentHTML('beforeend', bentornato) 
        }
    }
    if (mail != lista_mail[0] && mail != lista_mail[1] && mail != lista_mail[2] && mail != lista_mail[3] && mail != lista_mail[4]) {
        const messaggio_errore = document.getElementById('messaggio_mail')
        let errore = '<p>Errore: mail inserita non valida</p>'
        messaggio_errore.insertAdjacentHTML('beforeend', errore)
    }
})
// rimuovere messaggio mail
const reset_mail = document.getElementById('reset_mail')
reset_mail.addEventListener('click', function(){
    document.location.reload();
})

// click per generare i numeri
let genera = document.getElementById('genera')
genera.addEventListener('click', function(){

    // creazione numeri random
    const number_player = Math.floor(Math.random() * 6) + 1;
    const number_computer= Math.floor(Math.random() * 6) + 1;
    console.log(number_player);
    console.log(number_computer);
    // controllo numeri per stabilire vincitore
    if(number_player > number_computer) {
        console.log('hai vinto')
        const messaggio_v = document.getElementById('messaggio')
        let vittoria = `<p>Hai vinto, il tuo numero era: ${number_player}</p>`
        messaggio_v.insertAdjacentHTML('beforeend', vittoria)
    } else if (number_computer > number_player){
        console.log('hai perso');
        const messaggio_s = document.getElementById('messaggio')
        let sconfitta = `<p>Hai perso, il tuo numero era: ${number_player}</p>`
        messaggio_s.insertAdjacentHTML('beforeend', sconfitta) 
    } else {
        console.log('pareggio');
        const messaggio_p = document.getElementById('messaggio')
        let pareggio = `<p>Avete pareggiato, entrambi avete fatto: ${number_player}</p>`
        messaggio_p.insertAdjacentHTML('beforeend', pareggio)
    }
})

// rimuovere messaggi numeri
const reset_number = document.getElementById('reset_numeri')
reset_number.addEventListener('click', function(){
    document.location.reload();
})
