const setArray = (arr) => {
    let newArrr = [...new Set(arr)]
    console.log(newArrr);
}
console.log(setArray([1,1,1,1,1,11,3333,1,2,32,3,3,3,4,5,6]));