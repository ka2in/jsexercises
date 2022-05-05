/* Solutions to the exercises of the Book 'Eloquent Javascript', Marijn Haverbeke, No Starch Press, Third Edition.
 * Solutions provided by: Faycal Alami-Hassani
 * https://github.com/ka2in
 */

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

function sum(range) {
    /* Our second function is a sum function that takes an array of numbers and returns the sum of these
     * numbers. The example program returns 55 for the range 1 to 10 */
    let total = 0;
    for (let i = 0; i < range.length; i++) {
        total += range[i]; /* Recursively adding by going through the array */
    }
    return total;
};

console.log(range(1, 10));

console.log("The sum of your array is " + sum(range(1, 10)));


