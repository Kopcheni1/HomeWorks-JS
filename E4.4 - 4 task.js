function Device(name, consumption){
    this.isPlugged = false;
    this.name = name;
    this.consumption = consumption;
}

Device.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}

Device.prototype.getConsumption = function() {
    return this.isPlugged ? this.consumption : 0;
}

function LuminousDevice(name, type, color, consumption){
    this.name = name;
    this.type = type;
    this.color = color;
    this.consumption = consumption;
}

function ComputingDevice(name, type, consumption){
    this.name = name;
    this.type = type;
    this.consumption = consumption;
}

function KitchenDevice(name, type, consumption){
    this.name = name;
    this.type = type;
    this.consumption = consumption;
}

LuminousDevice.prototype = new Device();
ComputingDevice.prototype = new Device();
KitchenDevice.prototype = new Device();

const computer = new ComputingDevice('Aquarius', 'work', 450);
const fridge = new KitchenDevice('Bosch', 'freezing', 700);
const lamp = new LuminousDevice('IKEA', 'decorative', 'green', 60);

console.log(lamp.getConsumption() + computer.getConsumption() + fridge.getConsumption());

lamp.plugIn();
console.log(lamp.getConsumption());

computer.plugIn();
console.log(lamp.getConsumption() + computer.getConsumption());

fridge.plugIn();
console.log(lamp.getConsumption() + computer.getConsumption() + fridge.getConsumption());