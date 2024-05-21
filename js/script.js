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
divEl.innerHTML = (`<p>${arrayNumberRandom}</p>`);

