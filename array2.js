// const myaaray = (array1 ,array2)=> {
//     if(array1.length !== array2.length){
//         return false;
//     }
//     return array1.every((curval , index)=> curval === array2[index])
// }

// const regular = (array1) => {
//     if(array1.length == 0){
//         return 0;
//     }
//     const sum = array1.reduce((arr1 , arr2) => arr1 + arr2 , 0)
//     return sum / array1.length;
// }

// const randomragular = (arrr) => {
//     const ans = arrr.sort((a , b) => a - b)
//     console.log(ans);
//     const newans = ans.length
//     let mid = Math.floor(arrr.length/2)
//     if(newans%2 == 0){
//         return ((arrr[mid] + arrr[mid-1]) / 2)
//     }
//     else{
//         return arrr[mid]
//     }
// }


// const factorial = (num) => {
//     if( num === 1){
//         return 1;
//     }
//     else{
//         return num * factorial(num -1)
//     }
// }


// const fibonancci = (num) => {
//         if(num <= 1){
//             return 1;
//         }
//         else{
//             return fibonancci(num - 1) + fibonancci(num - 2)
//         }
// }

// const repeatstring = (str , num) => {
//     return str.repeat(num);
// } 

// const cuttingstring = (str , num) =>{
//     let par = Array.from(str).join("")
//     if(str.length < num){
//         return str;
//     }
//     else{
//         return par.slice(0 , num) + "..."
//     }
// }

// const numberRange = (num1 , num2) => {
//     let sum = num1;
//     for(let i = num1+1 ; i <= num2 ; i++){
//         sum += " "+ i;
//     }
//     return sum
// }

// const randomHaxColor = () => {
//     return "#"+Math.random().toString(16).slice(2,8)
// }

// const obj = {
//     name:"vedant" , 
//     age: 20,
//     gender: "male"
// }
// let entries = Object.entries(obj);

const calculateInterest = (p , r , t) => {
    return (p*r*t)/100;
}







// console.log(myaaray([1,2,3] , [1,2,3]))
// console.log(myaaray([1,2,4] , [1,2,6]))
// console.log(myaaray([1,2] , [1,2,]))
// console.log(regular([1,2,3,4,5,6,7,8,9]))
// console.log(repeatstring("Vedant Patel  " , 5));
// console.log(randomragular([2,4,6,8,10,12,14,16,18,20,22,24,26,28]))
// console.log(factorial(9))
// console.log(fibonancci(0) ,fibonancci(1) ,fibonancci(2) ,fibonancci(3) ,fibonancci(4) ,fibonancci(5) ,fibonancci(6) ,fibonancci(7) ,fibonancci(8) ,fibonancci(9) ,fibonancci(10) ,fibonancci(11) ,fibonancci(12) ,fibonancci(13) ,fibonancci(14))
// console.log(cuttingstring("Vedant patel is here can you here me" , 13));
// console.log(numberRange(-5 , 3));
// console.log(randomHaxColor());
// console.log(entries.flat()); console.log(entries);
//(Amount rate , per annum , time of year ) console.log(calculateInterest(1000 , 5 , 3));
