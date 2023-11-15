(function () {

    function Vehicle(color) {
        this.color = color;
        this.speed = 0;

        this.go = function (speed) {
            this.speed = speed;
            console.log(`Now going at speed ${this.speed}`);
        };

        this.print = function () {
            console.log(`Vehicle color: ${this.color}, current speed: ${this.speed}`);
        };
    }


    function Plane(color) {
        Vehicle.call(this, color);

        this.go = function (speed) {
            this.speed = speed;
            console.log(`Now FLYING at speed ${this.speed}`);
        };
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.constructor = Plane;


    const myCar = new Vehicle('blue');
    myCar.go(60);
    myCar.print();

    const myPlane = new Plane('white');
    myPlane.go(500);
    myPlane.print();

})()