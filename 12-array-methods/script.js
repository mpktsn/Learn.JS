'use strict';

/*
in obj there is a property className which contains "list" of "classes" - 
words, divided by spacebar.

Create addClass(obj, cls) function which adds class into list only if its 
not yet present there.

P.S. Function must not add excessive spaces.
*/

var obj = {
  className: 'open menu'
};

function addClass(obj, cls) {
    var array = obj.className ? obj.className.split(' ') : [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] == cls) return; // there is already such a "class"
    }
        array.push(cls);
        obj.className = array.join(' '); //updating properties
}