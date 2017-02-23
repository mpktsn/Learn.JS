'use strict';

/* Simple calc
Write a code which:

- requests for values in order by prompt()
and saves them in array
- ends input when user sends "" or clicks Cancel
- and 0 should not end the input since its allowed values
- outputs sum of array values entered

*/

var array = [];

while (true) {
    var value = prompt('Enter number: ', 0);

    if (value === "" || value === null || isNaN(value)) break;
    array.push(Number(value));
}

var sum = 0;
for (var i = 0; i < array.length; i++) {
    sum += array[i];
}

console.log(sum);