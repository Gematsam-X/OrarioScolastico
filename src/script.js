// Eseguiamo il codice solo dopo che il DOM è stato completamente caricato
document.addEventListener("DOMContentLoaded", function () {
  // Selezioniamo tutte le celle della tabella con il tag <td>
  let cells = document.getElementsByTagName("td");

  // Iteriamo su ogni cella e le assegniamo una classe di colore in base al testo contenuto
  for (let i = 0; i < cells.length; i++) {
    let cellText = cells[i].innerText.trim();
    let colorClass = getColorClass(cellText);
    cells[i].classList.add(colorClass);
  }

  // Mostriamo la data (oggi o domani a seconda dell'orario o del debug)
  getCorrectDate();
});

// Funzione per ottenere la data corretta (oggi prima delle 9, domani dopo le 9)
function getCorrectDate() {
  let now = new Date(); // Data e ora attuale

  // 🚀 DEBUG MODE
  let debugForceBeforeNine = false; // <-- cambia a false per tornare normale

  // Se vogliamo simulare "prima delle 9", forziamo l'orario a 8:59
  if (debugForceBeforeNine) now.setHours(8);
  now.setMinutes(59);

  let today = new Date(now);
  let targetDate = new Date(today);

  let label = ""; // cosa scrivere in .tomorrow_word

  // Se siamo DOPO le 9:00, mostriamo domani
  if (now.getHours() >= 9) {
    targetDate.setDate(targetDate.getDate() + 1);
    label = " domani, ";
  } else {
    label = " oggi, ";
  }

  // Se il giorno scelto è Sabato → saltiamo a Lunedì
  if (targetDate.getDay() === 6) {
    targetDate.setDate(targetDate.getDate() + 2);
    label = ""; // niente scritta
  }
  // Se il giorno scelto è Domenica → saltiamo a Lunedì
  else if (targetDate.getDay() === 0) {
    targetDate.setDate(targetDate.getDate() + 1);
    label = ""; // niente scritta
  }

  // Formattiamo la data
  const giornoDellaSettimana = targetDate.toLocaleDateString("it-IT", {
    weekday: "long",
  });
  const options = { day: "numeric", month: "long" };
  const formattedDate = targetDate.toLocaleDateString("it-IT", options);

  const giornoMaiuscolo =
    giornoDellaSettimana.charAt(0).toUpperCase() +
    giornoDellaSettimana.slice(1);
  const dataParts = formattedDate.split(" ");
  const giornoNumerico = dataParts[0];
  const meseMaiuscolo =
    dataParts[1].charAt(0).toUpperCase() + dataParts[1].slice(1);

  const finalString = `${giornoMaiuscolo} ${giornoNumerico} ${meseMaiuscolo}`;

  document.querySelector(".date").innerHTML = finalString;
  document.querySelector(".tomorrow_word").innerHTML = label;
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
