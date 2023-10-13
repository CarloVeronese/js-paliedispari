let userChoice
do{
    userChoice = (prompt('Scegli pari o dispari')).toLowerCase()
} while (userChoice != 'pari' && userChoice !='dispari')
const userNumber = getRndInteger(0, 5)
const computerNumber = getRndInteger(0, 5)
const sum = getSum(userNumber, computerNumber)
console.log('Scelta utente: ' + userChoice + ' Numero utente: ' + userNumber + ' Numero compter: ' + computerNumber + ' Somma: ' + sum)
if(isEven(sum)){
    if(userChoice == 'pari') userWinner()
    else computerWinner()
}
else{
    if(userChoice == 'pari') computerWinner()
    else userWinner()
}
function getRndInteger(min, max){
    return (Math.floor(Math.random() * (max - min)) + min)
}

function getSum(numA, numB){
    return numA + numB
}

function isEven(num){
    return ((num % 2) == 0)
}

function userWinner(){
    console.log("Hai vinto!!")
}

function computerWinner(){
    console.log("Ha vinto il computer")
}
