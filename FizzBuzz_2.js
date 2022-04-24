/* Solutions to the exercises of the Book 'Eloquent Javascript', Marijn Haverbeke, No Starch Press, Third Edition.
 * Solutions provided by: Faycal Alami-Hassani
 * https://github.com/ka2in
 */


let num = 0;
for (let counter = 0; counter <= 99; counter += 1) { // Defining the counter
  num = num + 1 // Incrementing the value
  if (num % 3 === 0 && num % 5 === 0) { // Remainder for 3 AND for 5
    console.log('FizzBuzz');
  } else if (num % 3 === 0) { // Remainder for 3
    console.log('Buzz');
  } else if (num % 5 === 0) { // Remainder for 5
    console.log('Fizz');
  } else console.log(num) // For all other numbers
}
