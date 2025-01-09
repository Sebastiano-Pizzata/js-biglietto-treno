//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
   //- il prezzo del biglietto è definito in base ai km (0.21 € al km)
   //- va applicato uno sconto del 20% per i minorenni
   //- va applicato uno sconto del 40% per gli over 65.
   //- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
   // Questo richiederà un minimo di ricerca.

//1-partiamo con il determinare le 2 variabili
//2-poi si calcola il prezzo del biglietto in in base ai km e sconti
//3-e terminiamo stabilendo il prezzo totale del biglietto prendendo massimo due decimali tramite tofixed


//Fase di preparazione delle variabili

let chilometri = prompt("quanti chilometri devi precorrere?" );
let età =  prompt("quanti anni hai?");


console.log( chilometri, età )

//Fase di calcolo del prezzo con sconti e con il decimale

let prezzoViaggioPerChilometri = chilometri * 0.21 ;

let prezzo = prezzoViaggioPerChilometri.toFixed(2)

if(età < 18 ){
    prezzoViaggioPerChilometri = ( chilometri * 0.21) * 20 / 100; 
    
} else if (età > 65 ){
    prezzoViaggioPerChilometri = ( chilometri * 0.21) * 40 / 100;

}

console.log( prezzoViaggioPerChilometri,prezzo )

