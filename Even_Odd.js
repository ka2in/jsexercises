/* Solutions to the exercises of the Book 'Eloquent Javascript', Marijn Haverbeke, No Starch Press, Third Edition.
 * Solutions provided by: Faycal Alami-Hassani
 * https://github.com/ka2in
 */
function isEven(N) {
  /* Convert positive numbers into negative ones */
  if (N <= 0) {
    N = -N;
  }
  while (N - 2 >= 0) {
    /* define whether a positive whole number is even or odd */
    N = N - 2;
  }
  if (N == 0) {
    console.log("Number is even");
  } else if (N == 1) {
    console.log("Number is odd");
  } else {
    console.log("Number is negative");
  }
}


isEven(-85);
