/* Solutions to the exercises of the Book 'Eloquent Javascript', Marijn Haverbeke, No Starch Press, Third Edition.
 * Solutions provided by: Faycal Alami-Hassani
 * https://github.com/ka2in
 */
let end;
let start;

function range(start, end) {
    /* Writing a 'range' function that takes two arguments, start and end, and returns
    an array containing all the numbers from start up to (and including) end .*/
    if (start == end) {
        console.log('Values are identical. Please set different values for start and end.');
    } else if (start > end) {
        console.log('Start value is superior to End value. Please revert the values.');
    } else {
        let myarray = []; /* Initializing with an empty array */
        let index = start; /* Declaring an index variable to avoid incrementation being passed to the for loop */
        for (let i = 0; i <= end - start; i++) {
            myarray[i] = index++; /* Going through the array */
        }
        return myarray;
    }
}
console.log(range(1, 10));

let n = 11;
let arr = [...Array(n).keys()];

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]; /* Going through the array */
    }
    return total;
}

console.log(arr);
console.log("The sum of your array is " + sum(arr));
