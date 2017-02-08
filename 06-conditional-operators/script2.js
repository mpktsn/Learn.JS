'use strict';

// Using if..else statement, write a code which 
// gets prompt's value, and then outputs alert:

// 1 if value >0, -1 if value <0, and 0 if value =0.

var value = prompt('Enter number:', '');
alert(evaluateNumber(value));


function evaluateNumber(value) {
    if (value > 0) {
        return 1;
    } else if (value < 0) {
        return -1;
    } else {
        return 0;
    }
}