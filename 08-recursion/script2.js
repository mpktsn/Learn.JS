'use strict';

/* 

Compute the factorial.

Write the factorial computing function with recursion.
It must return the factorial of n!.

*/

function factorial(n) {
    if (n == 0 || n == 1) return 1;
    for (var i = n; i = 1; i--) {
        return n * factorial (n - 1);
    }
}

var n = Number(prompt("Enter number: ", ''));

alert(factorial(n));