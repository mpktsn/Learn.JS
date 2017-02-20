'use strict';

/* simple spam check 

write  checkSpam(str) function which returns true if checkString
contains defined spam words - 'viagra' or 'XXX'

function must be case insensitive.

*/

var checkString = prompt("Enter text to be checked: ",'');

var spam = [];
spam[0] = 'viagra';
spam[1] = 'xxx';

function checkSpam(string) {
    // first we must convert string to same case to be able to perform spam check
    string = string.toLowerCase();
    if (string.indexOf(spam[0]) == -1 && string.indexOf(spam[1]) == -1) {
        return false
    } else return true;
}

console.log(checkSpam(checkString));