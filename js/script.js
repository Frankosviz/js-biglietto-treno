// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// va applicato uno sconto del 20% per i minorenni

// va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


let kilometers = prompt('Quanti km vorresti percorrere?');

console.log(kilometers);

let age = prompt('Quanti anni hai?');

console.log(age);

let price = (0.21 * kilometers);


console.log(`Il prezzo è ${price}€`);

if (age < 18){
    console.log(`Hai diritto ad uno sconto del 20% perchè sei minorenne, quindi il tuo sconto è di ${((price * 20) / 100)}€`);
    console.log(`Totale da pagare: ${((price - (price * 20) / 100))}€`);
    document.getElementById("price-twenty").innerHTML = `Hai diritto ad uno sconto del 20% perchè sei minorenne, quindi il tuo sconto è di ${((price * 20) / 100).toFixed(2)}€. Prezzo da pagare: ${((price - (price * 20) / 100).toFixed(2))}€`;
    console.log (price);

// } if ((kilometers === 0) || (age === 0)) {
//      console.log ('Scrivi un numero diverso da 0')


} else if (age > 65){
    console.log(`Hai diritto ad uno sconto del 40% perchè sei over65, quindi il tuo sconto è di ${((price * 40) / 100)}€`)
    console.log(`Totale da pagare: ${((price - (price * 40) / 100))}€`);
    document.getElementById("price-forty").innerHTML = `Hai diritto ad uno sconto del 40% perchè sei over65, quindi il tuo sconto è di ${((price * 40) / 100).toFixed(2)}€. Prezzo da pagare: ${((price - (price * 40) / 100).toFixed(2))}€`;
    console.log (price);

} else {
    console.log(`Non hai diritto a nessun tipo di sconto, perchè la tua età è compresa tra 18 e 65 anni`);
    console.log(`Totale da pagare: ${price}€`);
    document.getElementById("price-complete").innerHTML = `Non hai diritto a nessun tipo di sconto, perchè la tua età è compresa tra 18 e 65 anni. Prezzo da pagare: ${price.toFixed(2)}€`;
    console.log (price);
}