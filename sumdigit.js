const SumOfDigit = (e) => {
    let arr = Array.from(String(e) , Number)
    console.log(arr);
    return arr.reduce((val1 , val2) => val1 += val2)
}
console.log(SumOfDigit(1234455));