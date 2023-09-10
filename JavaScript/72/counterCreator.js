window.app = window.app || {};

(function (app) {
    'use strict';
    app.createCounter = function () {
        let num = 0;
        function increment(incrmnt) {
            num += incrmnt;
        }
        function getCount() {
            console.log(num);
        }
        return { increment, getCount };
    };
}(window.app));

// const counterA = window.app.createCounter();
// counterA.increment(20);
// counterA.getCount();


// const counterB = window.app.createCounter();
// counterB.increment(30);
// counterB.getCount();