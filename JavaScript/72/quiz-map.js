// SL - parens on left side of variable being assigned result of IIFE is unusual. Parens would usually be after the =
(window.app1 = function () {
    'use strict';

    function myMap(array, func) {
        let newArray = [];
        //let index = 0;
        array.forEach(element => {
            //newArray[index++] = func(element);
            newArray.push(func(element));
        });
        console.log(`Original Array: ${array}`);
        console.log(`New Array: ${newArray}`);
    }

    // SL - Why not just return the function directly?
    // For that matter, why not just window.app1 = function(array, func) { ...map impl here... }m you not using the "private" area we gain by having it in an IIFE anyway
    return { myMap };

}());

const x = [2, 4, 6];
window.app1.myMap(x, x => x * 2);
window.app1.myMap(x, x => x + 'test');

// SL - nice!
