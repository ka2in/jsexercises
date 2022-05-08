/* Solutions to the exercises of the Book 'Eloquent Javascript', Marijn Haverbeke, No Starch Press, Third Edition.
 * Solutions provided by: Faycal Alami-Hassani
 * https://github.com/ka2in
 */


/* First algorithm for out-of-place reverse, i.e. using a 'new' array that contains the same elements in reverse order */

function reverseArray(initial) {
    let newarray = []; /* Declaring and empty array that we will fill with the new values in reverse order */
    for (let i = initial.length - 1; i >= 0; i--) {
        /* Starting from the end of the 'initial' array */
        newarray.push(initial[i]); /* Using the push method to append values from the old array to the end of our new, empty array */
    }
    return newarray;
}


/* Second algorithm for in-place reverse, i.e. the original array is modified directly, without creating a new copy */

function reverseArrayInPlace(initial) {
    for (let i = 0; i <= ((initial.length - 1) / 2); i++) { /* Replacing elements of the first half of our array by values from the second half of the same array*/
        let element = initial[i]; /* Declaring the array element that will serve as a placeholder to exchange values on both ends */
        initial[i] = initial[initial.length - 1 - i]; /* Replacing the element at the beginning of our array by the one at the end of the array, and going further through the array till we reach its half */
        initial[initial.length - 1 - i] = element; /* Passing the value at the second half of our array to position that is on the first half */
    }
    return initial;
}


let a = [5, 85972, 8, 4, 125, -4598, 16, 89, 2, 7, -28610, 3];
console.log("Out-of-place Reverse: " + reverseArray(a));
console.log("In-Place Reverse: " + reverseArrayInPlace(a));