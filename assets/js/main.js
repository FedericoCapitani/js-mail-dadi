// chiedere mail all'utente e controllare se può accedere , generare poi un numero random tra 1 e 6 sia per il giocatore che per il computer, vince chi fa il punteggio più alto

// chiediamo la mail all'utente 
let genera = document.getElementById('submit')
genera.addEventListener('click', function() {
    let mail = document.getElementById('mail').value
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
                const messaggio_v = document.getElementById('messaggio')
                let vittoria = `Hai vinto, il tuo numero era: ${number_player}</p>`
                messaggio_v.insertAdjacentHTML('beforeend', vittoria)
            } else if (number_computer > number_player){
                console.log('hai perso');
                const messaggio_s = document.getElementById('messaggio')
                let sconfitta = `Hai perso, il tuo numero era: ${number_player}</p>`
                messaggio_s.insertAdjacentHTML('beforeend', sconfitta) 
            } else {
                console.log('pareggio');
                const messaggio_p = document.getElementById('messaggio')
                let pareggio = `<p>Avete pareggiato, entrambi avete fatto: ${number_player}</p>`
                messaggio_p.insertAdjacentHTML('beforeend', pareggio)
            }
        }
    }
    // messaggio errore inserimento mail
    if (mail != listaMails[0] && mail != listaMails[1] && mail != listaMails[2] && mail != listaMails[3] && mail != listaMails[4]){
        const messaggio_errore = document.getElementById('messaggio')
        let errore = '<p>Errore nell\'inserimento della mail</p>'
        messaggio_errore.insertAdjacentHTML('beforeend', errore)
    }
})

