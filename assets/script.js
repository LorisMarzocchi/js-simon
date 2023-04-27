/*
Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
Buon divertimento!
*/

//data di partenza
const dataCountdown = new Date("2023-04-28T09:30:00").getTime();

// funzione CountDown

const time = setInterval(function() {

    let now = new Date().getTime();
   

    let timeRemaining = dataCountdown - now;
    
    let secondi = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    let minuti = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let ore = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let giorni = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));


    document.querySelector(".secondi").innerHTML = secondi;
    document.querySelector(".minuti").innerHTML = minuti;
    document.querySelector(".ore").innerHTML = ore;
    document.querySelector(".giorni").innerHTML = giorni;

    if (timeRemaining == 0){
        clearInterval(time);
        document.querySelector(".finish").innerHTML = "Tempo Scaduto";
    }
});
// const IdInterval = setInterval(() => {

//     let now = new Date().getTime();
//     let timeRemaining = dataCountdown - now;
//     let secondi = Math.floor((timeRemaining / 1000) % 60); 
//     document.querySelector(".secondi").innerHTML = secondi;
    
// }, 1000);