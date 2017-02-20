'use strict';

/* Truncation of string

Create a function truncate(str, maxlength) which checks the str's 
length and if it exceeds maxlength then it replaces
the end of str with "..." the way it becomes = maxlength.

The result must be a truncated string, if needed.

*/

var string = "What I'd like to tell on this topic is:";

function truncate(str, maxlength) {
    if (str.length <= maxlength) return str
    else {
        var slicedStr = str.slice(0, maxlength - 1);
        return slicedStr + '…';
    }
}

console.log(truncate(string, 20));