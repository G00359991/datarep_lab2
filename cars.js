class Vehicle{

    constructor(make, model, year){ // constructor that will set make, model and year for the parameters.
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`); // logs inputted information about the make, model and year on to the console.
    }
}

class Cars extends Vehicle{ // used to inherit the code from the Vehicle class for the Cars class.
    constructor(make, model, year, doors){ // constructor used to set doors as a parameter.
        super(make, model, year); // code used to bring in the parameters from Vehicle class for use.
        this.doors = doors;
    }

    Information(){
        super.Information(); // pulls in code used within Vehicle class that inputs the make, model and year.
        console.log(`Doors: ${this.doors}`); // logs inputted information about doors to the console.
    }
}

let myCar = new Cars('VW', 'Golf', 2011, 5); // parameters that will be input to the console for make, model, year and doors.
myCar.Information();