const arr =  [3,5,2]
//console.log the maximum number of an array
//expectedd output 5
console.log(Math.max(...arr))

//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]

const elementToRemove = 2;
console.log(arr.filter(item => item !== elementToRemove))


//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,10]
console.log(arr.map((item)=>{
    return item*5}
))


//find intersection (common elements) of arr and arr2
//expected output: [5]
const arr2 = [5,21,32]
console.log(arr.filter(item => arr2.includes(item)))