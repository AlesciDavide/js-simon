/* funzione per generare numero random */
function generateNumberRandom(){
    let num = Math.floor(Math.random() * 100 + 1) ;
    return num;
};

/* genero i numeri random e controllo se sono già presenti nell'array dei numeri random. arrayNumberRandom*/
function checkNumberRandom(arrayRandomNumber){
    let numberRandom;
    let isFound = false;

    while(!isFound){
        numberRandom = generateNumberRandom();
        if(arrayRandomNumber.includes(numberRandom) === true){
            isFound = false;
        }else{
            isFound = true;
            return numberRandom;
        }
    }
};

/* creo l'array dei numeri random */

let arrayNumberRandom = [];

    for(let i = 0; arrayNumberRandom.length < 5; i++){
        arrayNumberRandom[i] = checkNumberRandom(arrayNumberRandom);
    }
    console.log(arrayNumberRandom);

/* stampo i numeri generati random in pagina */

let divEl = document.querySelector('div#container');
for(let i = 0; i < 5; i++){
    divEl.innerHTML += (`<p class="numeri">${arrayNumberRandom[i]}</p>`);
}

/* creo una funzione che mi cancella i numeri generati random dal dom  */
setTimeout(function(){
    divEl.innerHTML = ('');
}, 29500);

/* imposto il timeout per l'avvio della funzine */
setTimeout(numeriUtente, 30000, arrayNumberRandom);

/* creo la funzione per il check dei numeri inseriti dall'utente */
function numeriUtente(arrayNumberRandom){
    
    let arrayNumeriUtente = [];
    let arrayNumeriIndovinati = [];
    let k = 0;
        for(let i = 0; i < 5; i++){
            arrayNumeriUtente[i] = Number.parseInt(prompt(`Procedi ad inserire i numeri, uno alla volta. Numero ${i+1} da inserire!`));
        }
        for(let i = 0; i < 5; i++){
            if(arrayNumberRandom.includes(arrayNumeriUtente[i])){
                arrayNumeriIndovinati[k] = arrayNumeriUtente[i];
                k++;
            }
        }
        divEl.innerHTML = (`<div class="risultato">Hai inserito correttamente ${k} numeri. E i numeri sono:</div>`);
        for(let i = 0; i < k; i++){
            divEl.innerHTML += (`<p class="numeri">${arrayNumeriIndovinati[i]}</p>`);
        }

}