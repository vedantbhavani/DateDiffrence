const sumOfVowels = (str) => {
    let wowel = ["a" , "e" , "i" , "O" , "u"]
    let sum = 0;
    for(let i = 0; i < str.length ; i++){
        if(wowel.includes(str[i].toLowerCase())){
            sum = sum + 1;
        }
    }
    return sum;
}
console.log(sumOfVowels("Krishna Is A Suprime"));