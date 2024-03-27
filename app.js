

class Vehicle {
    
    constructor(make , model , year){
        this.make = make;
        this.model = model ; 
        this.year = year ;
    }


    honk(){
        return "Beep" ;
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }

}

//--------------------------------------------------------------------------------------------------------------------

class Car extends Vehicle {
    constructor(make , model , year){
        super(make , model , year);
    }

    numWheels = 4 ;
}

//--------------------------------------------------------------------------------------------------------------------

class Motorcycle extends Vehicle{
    constructor(make , model , year){
        super(make , model , year);
    }

    numWheels = 2 ;

    revEngine(){
        return "VROOM!!!" ;
    }
}

//--------------------------------------------------------------------------------------------------------------------

class Garage {
    constructor(capacity){
        this.capacity = capacity ;
        this.vehicles = [];
    }

    add(vehicle){
       if (!(vehicle instanceof Vehicle)){
        return "ONLY VEHICLES ARE ALLOWED IN HERE!"
       }
       if (this.vehicles.length >= this.capacity){
        return "SORRY , WE'RE FULL!"
       }
       this.vehicles.push(vehicle);
       return "Vehicle Added.";
    }
}

//--------------------------------------------------------------------------------------------------------------------




const myFirstVehicle = new Vehicle('Toyota', 'Monster Truck' , '1999');
// console.log(myFirstVehicle.toString());

const myFirstCar = new Car('Toyotal', 'Corolla', 1999);
// console.log(myFirstCar.honk());
// console.log(myFirstCar.numWheels);

const myFirstMotorcycle = new Motorcycle('ninja' , 'sportsbike' , '1990');
// console.log(myFirstMotorcycle.honk());
// console.log(myFirstMotorcycle.revEngine());
// console.log(myFirstMotorcycle.numWheels);

const dreamCar = new Car('BMW i8' , 'Roadster' , 2020);
const dreamCar2 = new Car('Posrche' , 'Carrera' , 2024 );
const dreamCar3 = new Car('Batmobile' , 'Batmobile' , 9999 );


const g1 = new Garage(2);
console.log(g1.add(dreamCar));      //  Vehicle Added.
console.log(g1.add(dreamCar2));     //  Vehicle Added.
console.log(g1.add(dreamCar3));     //  SORRY , WE'RE FULL!
console.log(g1.add('horse'));       //  ONLY VEHICLES ARE ALLOWED IN HERE!

