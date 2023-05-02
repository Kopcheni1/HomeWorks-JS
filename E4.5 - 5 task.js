class Device {
    constructor(name){
        this.isPlugged = false;
        this.name = name;
    }

    plugIn() {
        console.log(this.name + " is plugged!");
        return this.isPlugged = true;
    }

    getConsumption() {
        return this.isPlugged ? this.consumption : 0;
    }
}

class LuminousDevice extends Device {
    constructor(name, type, color, consumption){
        super(name);
        this.type = type;
        this.color = color;
        this.consumption = consumption;
    }
}

class ComputingDevice extends Device {
    constructor(name, type, consumption){
        super(name);
        this.type = type;
        this.consumption = consumption;
    }
}

class KitchenDevice extends Device {
    constructor(name, type, consumption){
        super(name);
        this.type = type;
        this.consumption = consumption;
    }
}

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