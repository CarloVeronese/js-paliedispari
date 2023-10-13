let word

do{
    word = (prompt('Inserisci una parola')).toLowerCase()
} while(word == '')

function wordMiddle(word){
    return Math.floor(word.length / 2)
}

function areDifferent(elementA, elementB){
    if(elementA != elementB){
        return true
    }
    else{
        return false
    }
}

function isPalindrome(word){
    middlePosition = wordMiddle(word)
    wordLength = word.length
    for(let i = 0; i < middlePosition; i++){
        if(areDifferent(word[i], word[wordLength - 1 - i])){
            return false
        }
    }
    return true;
}

console.log(isPalindrome(word))