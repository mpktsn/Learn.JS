'use strict';

// By using if..else statements, write a code which will
// request - what's the "official" name of JavaScript?

// If user enters "ECMAScript" then output "Correct!" and
// if something else - "You don't know? ECMAScript!"

var reply = prompt('What is the official name of JavaScript?', '')
if (reply == 'ECMAScript') {
    alert('Correct!');
} else {
    alert("You don't know? ECMAScript!");
}