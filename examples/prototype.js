function Robot() {
    this.name = '';
    this.say = function() {
        console.log(`Hello, I'm a Robot, my name is ${this.name}`);
    }
}

function RobotCloneMaker(proto) {
    this.proto = proto;
    this.clone = function() {
        const robot = new Robot();
        robot.name = this.proto.name;
        return robot;
    }
}

const firstRobot = new Robot();
firstRobot.name = 'Chappy';

const cloneMaker = new RobotCloneMaker(firstRobot);
const secondRobot = cloneMaker.clone();
secondRobot.say();
