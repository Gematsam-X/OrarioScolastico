document.addEventListener("DOMContentLoaded", function () {
    // Selezioniamo tutte le celle della tabella
    let cells = document.getElementsByTagName("td");
  
    // Aggiungiamo una classe di colore a ciascuna cella
    for (let i = 0; i < cells.length; i++) {
        let cellText = cells[i].innerText.trim(); // Rimuoviamo gli spazi extra
        let colorClass = getColorClass(cellText); // Otteniamo la classe di colore
        cells[i].classList.add(colorClass); // Aggiungiamo la classe di colore alla cella
    }
  
    // Mostriamo la data di domani con il giorno della settimana
    getTomorrowDate(); // Chiamata alla funzione per mostrare la data di domani
  });
  
  // Funzione per ottenere la data formattata di domani con il giorno della settimana
  function getTomorrowDate() {
    const today = new Date(); // Creiamo un oggetto Date per la data attuale
    today.setDate(today.getDate() + 1); // Aggiungiamo un giorno
    
    // Opzioni per ottenere il giorno della settimana
    const giornoDellaSettimana = today.toLocaleDateString('it-IT', { weekday: 'long' }); // Otteniamo il giorno della settimana in italiano
    const options = { day: 'numeric', month: 'long' }; // Opzioni di formattazione
    const formattedTomorrowDate = today.toLocaleDateString('it-IT', options); // Formattiamo la data di domani
  
    // Formattiamo il giorno e il mese in maiuscolo
    const giornoMaiuscolo = giornoDellaSettimana.charAt(0).toUpperCase() + giornoDellaSettimana.slice(1);
    const dataParts = formattedTomorrowDate.split(" ");
    const giornoNumerico = dataParts[0];
    const meseMaiuscolo = dataParts[1].charAt(0).toUpperCase() + dataParts[1].slice(1);
  
    // Componiamo la stringa finale
    const finalString = `${giornoMaiuscolo} ${giornoNumerico} ${meseMaiuscolo}`; // Stringa finale come "Mercoledì 25 Settembre"
    document.querySelector('.date').innerHTML = finalString; // Visualizziamo la data nella <span class="date">
  }
  
  // Funzione per ottenere la classe di colore in base al testo della cella
  function getColorClass(text) {
    let colorClass = "";
  
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
            colorClass = "default-color";
            break;
    }
  
    return colorClass; // Restituiamo la classe di colore
  }