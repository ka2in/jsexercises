/* Solutions to the exercises of the Book 'Eloquent Javascript', Marijn Haverbeke, No Starch Press, Third Edition.
 * Solutions provided by: Faycal Alami-Hassani
 * https://github.com/ka2in
 */

function range(start, end, step) {
    /* Writing a 'range' function with a step value. the step value is used to build the array. If no
     * step is given, the elements go up by increments of one. The function returns
     * an array containing all the numbers from start up to (and including) end .*/
    if (step === undefined) {
        step = 1;
    } 
    else if (start < end) { /* Conditional for start value smaller than end value within range */
        let myarray = []; /* Initializing with an empty array */
        let index = start; /* Declaring an index variable to avoid incrementation being passed to the for loop */
        for (let i = 0; i <= end - start && index <= end; i++) { /* Defining the range of the array index */
            myarray[i] = index; /* Going through the array */
            index = index + step;
        }
        return myarray;
    }
    else { /* Conditional for end value smaller than start value within range */
        let myarray = []; /* Initializing with an empty array */
        let index = start; /* Declaring an index variable to avoid incrementation being passed to the for loop */
        for (let i = 0; i <= start - end && index <= start; i++) { /* Defining the range of the array index */
            myarray[i] = index; /* Going through the array */
            index = index + step;
        }
        return myarray;
    } 
}


console.log(range(5, 2, -1));
console.log(range(1, 10, 2))
