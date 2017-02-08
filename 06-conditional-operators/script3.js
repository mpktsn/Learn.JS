'use strict';

/* Write a code which will prompt for login username.

 if user inputs 'Admin' then prompt for password.
 If user clicks Cancel then output "who the f are you"
 Here's how to check password:
 
 If password entered is 'black overlord' then output
 "Welcome!", otherwise - "Wrong password", at cancel -
 "Logon cancelled."

 Block-scheme: http://learn.javascript.ru/task/check-login/ifelse_task.png
*/

var username = prompt("Enter username:", '');

if (username === 'admin') {
    var password = prompt("Enter password:", '');
    if (password === 'black overlord') {
        alert("Welcome!")
    } else if (password === null) {
        alert("Logon cancelled.")
    } else {
        alert("Wrong password.")
    }
} else {
    alert('Who the f are you?');
} 