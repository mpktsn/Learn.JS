'use strict';

// Not intended to be included to web page.

/* 
1. Rewrite code to ternary operator use.

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

*/

(a + b < 4) ? result = "too low" : result = "too much";

/* 
2. Rewrite if..else to ternary.

var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/

var message;

(login == 'Vasya') ? message = 'Hi' :
    (login == 'CEO') ? message = 'Hello' :
        (login == '') ? message = 'No login' : message = '';