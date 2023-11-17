(function () {
    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
            this.speed = 0;
        }

        go(speed) {
            this.speed = speed;
            console.log(`Now going at speed ${this.speed}`);
        }

        print() {
            console.log(`Vehicle color: ${this.color}, current speed: ${this.speed}`);
        }
    }

    class Plane extends Vehicle {
        go(speed) {
            this.speed = speed;
            console.log(`Now FLYING at speed ${this.speed}`);
        }
    }

    const myCar = new Vehicle('blue');
    myCar.go(60);
    myCar.print();

    const myPlane = new Plane('white');
    myPlane.go(500);
    myPlane.print();


    const potus = { first: 'Joe', last: 'Biden', age: 205, iq: 33 };
    const hunter = { ...potus, first: 'Hunter' };

    console.log(hunter);
}());