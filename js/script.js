// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

var listaNumeriPc = [];

// ciclo per far generare 5 numeri random e unici al pc
while (listaNumeriPc.length < 5) {

  var numeriPc = genaratoreNumeriRandom(20);

  if (!listaNumeriPc.includes(numeriPc, 0)) {
    listaNumeriPc.push(numeriPc);
  }

}

alert("Ricorda questi numeri: " + listaNumeriPc);

// funzione timer di 30 secondi
setTimeout(function () {

  alert("Tempo scaduto. Ora scrivi i numeri che ricordi.");

  var listaNumeriUtente = [];
  var listaNumeriRicordati = [];
  var puntiUtente = 0;

  // ciclo per far comparire 5 prompt nei quali l'utente dovrà scrivere altrettanti numeri
  while (listaNumeriUtente.length < 5) {

    var numeriUtente = parseInt(prompt("inserisci un numero tra 1 e 20"));

    // se il numero inserito dall'utente non è già presente all'interno dell'array allora fai un push
    if (!listaNumeriUtente.includes(numeriUtente, 0) && numeriUtente <= 20) {
      listaNumeriUtente.push(numeriUtente);

    // altrimenti fai uscire un messaggio di avviso
    } else {
      alert("numero non valido");
    }

  }

  // ciclo per controllare che il numero inserito dall'utente sia presente nella lista di quelli del pc e per incrementare il punteggio dell'utente
  for (var i = 0; i < listaNumeriUtente.length; i++) {

    if (listaNumeriPc.includes(listaNumeriUtente[i], 0)) {
      puntiUtente++;
      listaNumeriRicordati.push(listaNumeriUtente[i]);
    }

  }

  console.log("numeri pc: " + listaNumeriPc);
  console.log("numeri utente: " + listaNumeriUtente);
  console.log("Hai ricordato: " + puntiUtente + " / 5");
  console.log("i numeri che hai ricordato sono: " + listaNumeriRicordati);

}, 30 * 1000);

// FUNZIONI
// funzione per generare numeri random
function genaratoreNumeriRandom(numero) {
  return Math.floor(Math.random() * numero) +1;
}
