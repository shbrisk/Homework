window.app = window.app || {};
'use strict';

window.app.counter = (function () {
    let num = 0;

    return {
        increment(incrmnt) {
            num += incrmnt;
        },
        getCount() {
            console.log(num);
        }
    };

}());

// window.app.counter.increment(50);
// window.app.counter.increment(5);
// window.app.counter.getCount();
