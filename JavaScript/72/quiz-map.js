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
    return { myMap };

}());

const x = [2, 4, 6];
window.app1.myMap(x, x => x * 2);
window.app1.myMap(x, x => x + 'test');



