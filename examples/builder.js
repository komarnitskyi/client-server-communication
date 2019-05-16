function Plant() {
    this.build = function(builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}
function RobotBuilder() {
    this.robot = null;
    this.step1 = function() {
        this.robot = new Robot();
    }
    this.step2 = function() {
        this.robot.arm = 2;
    }
    this.get = function() {
        return this.robot;
    }
}
function Robot() {
    this.say = function() {
        console.log(`Hello, I'm robot with ${this.arm} arms`);
    }
}

const director = new Plant();
const robot = director.build(new RobotBuilder);
const robot1 = director.build(new RobotBuilder);
robot.say();
robot1.say();
console.log(robot === robot1);
console.log(robot.__proto__ === robot1.__proto__);

// function CarBuilder() {
//     this.car = null;
//     this.step1 = function () {
//         this.car = new Car();
//     }
//     this.step2 = function () {
//         this.car.wheels = 4;
//     }
//     this.get = function () {
//         return this.car;
//     }
// }
// function Car() {
//     this.say = function () {
//         console.log(`Hello, I'm car with ${this.wheels} wheels`);
//     }
// }




// const car = director.build(new CarBuilder);
// car.say();
