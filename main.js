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
const prezzoViaggioPerChilometri = 0.21
let chilometri = parseInt(prompt("quanti chilometri devi precorrere?" ));
let età =  parseInt(prompt("quanti anni hai?"));
let bigliettoMinorenni = 0.80;
let bigliettoOver = 0.60;
let prezzo;

console.log( chilometri, età )

//Fase di calcolo del prezzo con sconti e con il decimale

if(età < 18 ){
     prezzo = ( prezzoViaggioPerChilometri * chilometri ) * bigliettoMinorenni; 
    // console.log(`il prezzo del biglietto è: ${prezzo}`)
    
} else if (età > 65 ){
     prezzo = ( prezzoViaggioPerChilometri * chilometri) * bigliettoOver ;
    //  console.log(`il prezzo del biglietto è: ${prezzo}`)

} else{
     prezzo = (prezzoViaggioPerChilometri * chilometri );
    //  console.log(`il prezzo del biglietto è: ${prezzo}`)
}

console.log( `il prezzo del biglietto è: ${prezzo.toFixed(2)}` )

