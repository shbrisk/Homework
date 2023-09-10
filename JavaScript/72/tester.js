
'use strict';

const counter1 = window.app.counter;
const counter2 = window.app.createCounter();
const counter3 = window.app.createCounter();

counter1.increment(10);
counter2.increment(5);
counter3.increment(15);

counter1.getCount();
counter2.getCount();
counter3.getCount();