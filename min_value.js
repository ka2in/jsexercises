/* Solutions to the exercises of the Book 'Eloquent Javascript', Marijn Haverbeke, No Starch Press, Third Edition.
* Solutions provided by: Faycal Alami-Hassani
* https://github.com/ka2in
*/


function min(a, b) { /* A function that takes two arguments and returns their minimum */
    if (a - b <= 0) return a;
    else return b;
}

console.log(min(2000 ,-55986));