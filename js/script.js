/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

console.log('JS OK')


function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const lookingForpalindromeWord = isPalindrome(prompt('dimmi una parola e ti diro` se e` palindroma', 'anna'))
console.log(lookingForpalindromeWord)

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// funzione numero random cpu
function getRandomNumber(max) {
    const randomNumber = Math.floor((Math.random() * max) + 1);
    return randomNumber;
}
// funzione valutarzione pari o dispari
function isEven(cpuValue, userValue){
    let even = false;
    if( (cpuValue + userValue) % 2 == 0) {
        even = true;
    }
    
return even;
  }
// richiesta di un nu mero da 1 a 5 all'utente
const userChoice = parseInt(prompt('scegli un numero da 1 a 5' , 3))
if(userChoice > 5 || userChoice <= 0){
    alert('inserisci un numero valido')
}
const cpuChoice = getRandomNumber(5)
console.log(userChoice , cpuChoice)

const evenCheck = isEven(cpuChoice, userChoice )
console.log(evenCheck)

