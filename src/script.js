// Eseguiamo il codice solo dopo che il DOM è stato completamente caricato
document.addEventListener("DOMContentLoaded", function () {
    // Selezioniamo tutte le celle della tabella con il tag <td>
    let cells = document.getElementsByTagName("td");
  
    // Iteriamo su ogni cella e le assegniamo una classe di colore in base al testo contenuto
    for (let i = 0; i < cells.length; i++) {
        let cellText = cells[i].innerText.trim(); // Rimuoviamo eventuali spazi bianchi extra
        let colorClass = getColorClass(cellText); // Otteniamo la classe di colore in base al testo della cella
        cells[i].classList.add(colorClass); // Aggiungiamo la classe di colore alla cella
    }
  
    // Mostriamo la data di domani (o il prossimo giorno lavorativo, se domani è un giorno festivo)
    getTomorrowDate(); // Chiamiamo la funzione per visualizzare la data di domani
});
  
// Funzione per ottenere la data di domani, formattata con il giorno della settimana
function getTomorrowDate() {
    let today = new Date(); // Creiamo un oggetto Date per la data attuale
    today.setDate(today.getDate() + 1); // Aggiungiamo un giorno alla data attuale
  
    // Otteniamo il giorno della settimana (0 = Domenica, 6 = Sabato)
    let dayOfWeek = today.getDay(); 
  
    // Se domani è Sabato, saltiamo direttamente a Lunedì
    if (dayOfWeek === 6) { 
        document.querySelector(".tomorrow_word").innerHTML = ""
        today.setDate(today.getDate() + 2); // Impostiamo la data a Lunedì
    } 
    // Se domani è Domenica, saltiamo a Lunedì
    else if (dayOfWeek === 0) { 
        document.querySelector(".tomorrow_word").innerHTML = ""
        today.setDate(today.getDate() + 1); // Impostiamo la data a Lunedì
    }
    
    // Otteniamo il giorno della settimana e la data in formato italiano
    const giornoDellaSettimana = today.toLocaleDateString('it-IT', { weekday: 'long' }); // Giorno della settimana
    const options = { day: 'numeric', month: 'long' }; // Opzioni per il giorno e il mese
    const formattedTomorrowDate = today.toLocaleDateString('it-IT', options); // Formattiamo la data di domani
  
    // Convertiamo la prima lettera del giorno e del mese in maiuscolo
    const giornoMaiuscolo = giornoDellaSettimana.charAt(0).toUpperCase() + giornoDellaSettimana.slice(1);
    const dataParts = formattedTomorrowDate.split(" ");
    const giornoNumerico = dataParts[0];
    const meseMaiuscolo = dataParts[1].charAt(0).toUpperCase() + dataParts[1].slice(1);
  
    // Componiamo la stringa finale nel formato "Giorno 1 Mese"
    const finalString = `${giornoMaiuscolo} ${giornoNumerico} ${meseMaiuscolo}`; 
    document.querySelector('.date').innerHTML = finalString; // Mostriamo la data nella <span class="date">
}
  
// Funzione per ottenere la classe di colore in base al testo contenuto nella cella
function getColorClass(text) {
    let colorClass = "";
  
    // Controlliamo il testo della cella e associamo una classe di colore
    switch (text) {
        case "Inglese":
            colorClass = "inglese-color";
            break;
        case "Storia":
            colorClass = "storia-color";
            break;
        case "Scienze":
            colorClass = "scienze-color";
            break;
        case "Tecnologia":
            colorClass = "tecnologia-color";
            break;
        case "Religione/alternativa":
            colorClass = "religione_alternativa-color";
            break;
        case "Grammatica":
            colorClass = "grammatica-color";
            break;
        case "Antologia":
            colorClass = "antologia-color";
            break;
        case "Matematica":
            colorClass = "matematica-color";
            break;
        case "Geografia":
            colorClass = "geografia-color";
            break;
        case "Geometria":
            colorClass = "geometria-color";
            break;
        case "Letteratura":
            colorClass = "letteratura-color";
            break;
        case "Motoria":
            colorClass = "motoria-color";
            break;
        case "Musica":
            colorClass = "musica-color";
            break;
        case "Spagnolo":
            colorClass = "spagnolo-color";
            break;
        case "Arte":
            colorClass = "arte-color";
            break;
        default:
            colorClass = "default-color"; // Classe predefinita per i testi non riconosciuti
            break;
    }
  
    return colorClass; // Restituiamo la classe di colore associata al testo
}