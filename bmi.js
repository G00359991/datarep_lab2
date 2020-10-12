class BMI{
    constructor(height, weight){ //Constructor that will set height and weight for the bmi.
        this.height = height;
        this.weight = weight;
    }

    calculateBMI(){ // command used to call for the calculation.
        let bmi = this.weight/(this.height**2); //Code used to calculate a person's bmi(body mass index)
        return bmi;
    }

}

let MyBmi = new BMI(2, 90); //parameters to calculate bmi set.
let calculatedBMI = MyBmi.calculateBMI();
console.log(calculatedBMI); // output's result to the console.