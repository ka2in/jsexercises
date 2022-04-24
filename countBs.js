/* Solutions to the exercises of the Book 'Eloquent Javascript', Marijn Haverbeke, No Starch Press, Third Edition.
 * Solutions provided by: Faycal Alami-Hassani
 * https://github.com/ka2in
 */


function countBs(string) {
  /* A function that counts uppercase 'B' characters in a string*/
  let Bcount = 0;
  for (let i = 0; i <= string.length - 1; i++) {
    /* Counter that goes through the entire string starting from position zero*/
    if (string[i] == "B") {
      Bcount = Bcount + 1;
    }
  }
  console.log(`There are ${Bcount} Bs in the string`);
}

function countChar(string, char) {
  /* A function that counts 'char' occurrences in a string*/
  let Charcount = 0;
  for (let i = 0; i <= string.length - 1; i++) {
    /* Counter that goes through the entire string starting from position zero*/
    if (string[i] == char) {
      Charcount = Charcount + 1;
    }
  }
    if (Charcount )
  console.log(`There are ${Charcount} "${char}"s in the string`);
}

countBs("ThereisonlyBamBamintheBoumBoum");
countChar("ThereisonlyBamBamintheBoumBoum", "l");

