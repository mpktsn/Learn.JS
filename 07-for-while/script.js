'use strict';

// By using FOR cycle output the even numbers from 2 to 10.

for (var i = 2; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}