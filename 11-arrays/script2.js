'use strict';

/* A 5-step assignment.

1) create "styles" array with elements "Jazz", "Blues"
2) Add a "Rock and Roll" element to the end of array.
3) Replace the second-from-last element's value to "Classic".
Code for replacing must be working for array of any length.
4) Delete the first element of array and output it with alert().
5) Add "Rap" and "Reggae" elements to the beginning of the array.

*/

var styles = ["Jazz", "Blues"];
styles.push("Rock and Roll");
styles[styles.length - 2] = "Classic";
console.log(alert(styles.shift()));
styles.unshift("Rap", "Reggae");
console.log(styles);