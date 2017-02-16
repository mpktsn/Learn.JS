'use strict';

/* 

Compute sum of all numbers including the input.
Write a function sumTo(n) which calculates sum of numbers from 1 to n.

Write 3 variants of solution:
1) With a cycle.
2) with a recursion. - slowest
3) Using a arithmetic progression formula. - fastest
https://en.wikipedia.org/wiki/Arithmetic_progression

*/

// 1)

var n = Number(prompt("Enter number (cycle): ",''));

alert(sumTo(n));

function sumTo(x) {
    var sum = 0;
    for (var i = 1; i <= x; i++) {
        sum += i;
        console.log(sum + ', ' + i) // debug
    }
    return sum;
}

// 2)

var num = Number(prompt("Enter number (recursion): ",''));

alert(sumToRecursion(num));

function sumToRecursion(x) {
    var sum = 0;
    if (x == 1) return 1;
    return x + sumToRecursion(x - 1);
}

// 3)

var numba = Number(prompt("Enter number (arithmetic progression): ",''));

alert(sumToAP(numba));

function sumToAP(x) {
    return x * (x + 1) / 2;
}