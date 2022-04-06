/* Solutions to the exercises of the Book 'Eloquent Javascript', Marijn Haverbeke, No Starch Press, Third Edition.
* Solutions provided by: Faycal Alami-Hassani
* https://github.com/ka2in
*/

  let size = 8; // Defining a variable with empty content
  let square = ''; // Starting the string with an empty character
  for (let y = 0; y < size; ++y) { // Outer loop handling the lines with prefix increments
    for (let x = 0; x < size; ++x) { // Inner loop handling the characters on each line with prefix increments
      if ((x+y) % 2 == 0) {// Remainder for hashes and empty squares
        square += ' ';
      }
      else {
        square+= '#';
      }
    }
    square += '\n'; // Inserting a new line
  }

  console.log(square);
