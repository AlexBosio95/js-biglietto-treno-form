// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.26 € al km)
// va applicato uno sconto del 15% per i minorenni
// va applicato uno sconto del 35% per gli over 65.

const kmUser = document.querySelector('#km-user');
const ageUser = document.querySelector('#age-user');
const nameUser = document.querySelector('#name-user');
const btnCalc = document.querySelector('#calc-button');



btnCalc.addEventListener('click', function() {
     

    if ((kmUser.value != "") && (ageUser.value != "")) {
        
        if (ageUser.value <= 18) {
            console.log(((kmUser.value * 0.26) - (((kmUser.value * 0.26) / 100) * 15)).toFixed(2) + (" €"));
            document.getElementById("price-user").innerHTML = (((kmUser.value * 0.26) - (((kmUser.value * 0.26) / 100) * 20)).toFixed(2) + (" €"));
            document.getElementById('name-t-user').innerHTML = (nameUser.value)
            document.getElementById("crz-numer").innerHTML = Math.floor((Math.random() * 10) + 1);
            document.getElementById("cp-code").innerHTML = Math.floor((Math.random() * 1000) + 1);
            document.getElementById('dicount').innerHTML = "Biglietto Under" + " " + "(- 15%)"
        }

        else if (ageUser.value >= 65) {
            console.log(((kmUser.value * 0.26) - (((kmUser.value * 0.26) / 100) * 35)).toFixed(2) + (" €"));
            document.getElementById("price-user").innerHTML = (((kmUser.value * 0.26) - (((kmUser.value * 0.26) / 100) * 40)).toFixed(2) + (" €"));
            document.getElementById('name-t-user').innerHTML = (nameUser.value)
            document.getElementById("crz-numer").innerHTML = Math.floor((Math.random() * 10) + 1);
            document.getElementById("cp-code").innerHTML = Math.floor((Math.random() * 1000) + 1);
            document.getElementById('dicount').innerHTML = "Biglietto Over" + " " + "(- 35%)"

        }
        
        else{
            console.log((kmUser.value * 0.26).toFixed(2) + (" €"));
            document.getElementById('name-t-user').innerHTML = (nameUser.value)
            document.getElementById("price-user").innerHTML = ((kmUser.value * 0.26).toFixed(2) + (" €"));
            document.getElementById("crz-numer").innerHTML = Math.floor((Math.random() * 10) + 1);
            document.getElementById("cp-code").innerHTML = Math.floor((Math.random() * 1000) + 1);
            document.getElementById('dicount').innerHTML = "Biglietto Standard" 

        }
    } 

    else{
        alert('Valore inserito mancante o non accettato');
        kmUser.value = "";
        ageUser.value = "";
    }

})


